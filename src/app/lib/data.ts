//src/app/lib/data.ts

//import { actor } from "../type/types";

import mActors from "./actors.json";

  /* let actors:actor[] = [

    {
        id:"1",
        name:"ninja",
        image:"",
        description:"This ninja is the last survivor of the planet Olbia."
    },
    {
        id:"2",
        name:"Black Alien scum",
        image:"",
        description:"Red Scum is the natural born enemy for Ninjas"
    },
    {
        id:"3",
        name:"Death Smokie",
        image:"",
        description:"Fucked up ...Not fun to meet at all"
    },
    {
        id:"4",
        name:"Angry Ping",
        image:"",
        description:"The greatest of all monsters"
    }


]   */

export const getPosts = () => mActors?.actors;

export const getById = (id: string) => {

    return mActors?.actors.find((post) => post.id === id)

}