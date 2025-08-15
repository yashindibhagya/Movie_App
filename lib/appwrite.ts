import { Account, Client } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
    .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM!)

// The symbol ! is used to assert that the value is not null or undefined. and also becuase it is a ts file

export const account = new Account(client)