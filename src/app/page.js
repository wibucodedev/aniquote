"use client";
import "../styles/tailwind.css";

// React Things
import { useEffect } from "react";

//  Components
import * as UI from "react-daisyui";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Content from "@/components/content";

function Looping() {
	return <h1>Tolol</h1>
}


export default function Index() {
	return (
		<main>
			<Navbar></Navbar>
			<Content></Content>
			<Footer></Footer>
		</main>
	);
}
