import userResolvers from './user';
import drawingResolvers from './drawing';
//import organizationResolvers from './organization';

// since ApolloServer accepts a list of resolver maps, All of the resolver maps are exported to be used in the sever.js file
export default [userResolvers, drawingResolvers /* organizationResolvers*/];
