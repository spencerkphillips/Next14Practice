'use server'

import { liveblocks } from '../liveblocks';
import { nanoid } from "@liveblocks/core";
import { revalidatePath } from "next/cache";
import { parseStringify } from "../utils";

export const createDocument = async({ userId, email }: CreateDocumentParams)=> {

    try {
        const roomId = nanoid()

        const metadata = {
            creatorId: userId,
             email,
             title: 'Untitled Document',
        }

        const usersAccesses: RoomAccesses = {
            [email]: ['room:write']
        }

        const room = await liveblocks.createRoom(roomId, {
            metadata,
            usersAccesses,
            defaultAccesses: ['room:write']
        })

        revalidatePath('/');

        return parseStringify(room)
    } catch (error) {
        console.log(`Error creating document: ${error}`);
    }
}

export const getDocument = async ({ roomId, userId}: {roomId: string, userId: string}) => {
    try {

        const room = await liveblocks.getRoom(roomId);

        //const hasAccess = Object.keys(room.usersAccesses).includes(userId);
    
        /*if (!hasAccess) {
            throw new Error('User does not have access to this document');
        }*/
    
        return parseStringify(room);
    } catch(error){
        console.log(`Error fetching document: ${error}`);
    }
}

export const getDocuments = async (email:string) => {
    try {

        const rooms = await liveblocks.getRooms({ userId: email });

        //const hasAccess = Object.keys(room.usersAccesses).includes(userId);
    
        /*if (!hasAccess) {
            throw new Error('User does not have access to this document');
        }*/
    
        return parseStringify(rooms);
    } catch(error){
        console.log(`Error fetching rooms: ${error}`);
    }
}

export const updateDocument = async (roomId: string, title: string) => {
    try {
        const updatedRoom = await liveblocks.updateRoom(roomId, {
            metadata: {
                title
            }
        });

        revalidatePath(`/documents/${roomId}`);

        return parseStringify(updateDocument);
    } catch(error){
        console.error(`Error updating document: ${error}`);
    }
}