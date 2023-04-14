const express = require("express");
const app = express();
const expressGraphQL = require("express-graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  buildSchema,
} = require("graphql");

const professors = [
  { id: 1, firstName: "Aname", lastName: "lagstname" },
  { id: 2, firstName: "Steve", lastName: "Irwin" },
  { id: 3, firstName: "Nigel", lastName: "Marvin" },
];

const courses = [
  { id: 1, courseName: "C++ 1", professorId: 2 },
  { id: 2, courseName: "C# 1", professorId: 3 },
  { id: 3, courseName: "C# 2", professorId: 3 },
  { id: 4, courseName: "Javascript 1", professorId: 1 },
  { id: 5, courseName: "Web development", professorId: 1 },
];

const ProfessorType = new GraphQLObjectType({
  name: "Professor",
  description: "This a professor at a college",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    firstName: { type: GraphQLNonNull(GraphQLString) },
    lastName: { type: GraphQLString },
    courses: {
      type: new GraphQLList(CourseType),
      resolve: (professor) => {
        return courses.filter((course) => course.professorId == professor.id);
      },
    },
  }),
});

const CourseType = new GraphQLObjectType({
  name: "Course",
  description: "This is a course at a college",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    courseName: { type: GraphQLNonNull(GraphQLString) },
    professorId: { type: GraphQLNonNull(GraphQLInt) },
    professor: {
      type: ProfessorType,
      resolve: (course) => {
        return professors.find(
          (professor) => professor.id === course.professorId
        );
      },
    },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    professors: {
      type: GraphQLList(ProfessorType),
      description: "All Professors",
      resolve: () => professors,
    },
    professor: {
      type: ProfessorType,
      description: "All Professors",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) => {
        return professors.find((professor) => professor.id === args.id);
      },
    },
    CoursesTaught: {
      type: GraphQLList(CourseType),
      description: "List of Courses By Professor",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) => {
        return courses.filter((course) => course.professorId === args.id);
      },
    },
    courses: {
      type: GraphQLList(CourseType),
      description: "All Courses",
      resolve: () => courses,
    },
    course: {
      type: CourseType,
      description: "Single Course",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) => {
        return courses.find((course) => course.id === args.id);
      },
    },
  }),
});

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({
    AddProfessor: {
      type: ProfessorType,
      description: "Add a professor",
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        const professor = {
          id: professors.length + 1,
          firstName: args.firstName,
          lastName: args.lastName,
        };
        professors.push(professor);
        return professor;
      },
    },
    AddCourse: {
      type: CourseType,
      description: "Adds a course to a professor",
      args: {
        professorId: { type: GraphQLInt },
        courseName: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        const course = {
          id: courses.length + 1,
          courseName: args.courseName,
          professorId: args.professorId,
        };
        courses.push(course);
        return course;
      },
    },
  }),
});

var schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

app.use(
  "/",
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);

app.listen(5000, () => console.log("Server Running"));
