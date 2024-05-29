

import { getById } from "@/app/lib/data";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, route: { params: { id: string } }) => {

    try {
       
       const id: string = route.params.id;

        const post = getById(id)

        if (!post) {

            return NextResponse.json({ message: "ERROR", post }, { status: 404 })//bad request

        }

        return NextResponse.json({ message: "OK", post }, { status: 200 })//succes result

    } catch (err) {

        return NextResponse.json({ message: "OK", err }, { status: 500 })//internal server error (connection error?)
    }


} 


