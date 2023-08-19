//src/app/api/actors/route

import { getPosts } from "../../lib/data";
import { NextResponse } from "next/server";

export const GET = async () => {

    try {

        const posts = getPosts();

        return NextResponse.json({ message: "ok", posts }, { status: 200 })

    } catch (err) {

        return NextResponse.json({ message: "error", err }.err, { status: 500 });

    }
}