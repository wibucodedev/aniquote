"use client";
import "../styles/tailwind.css";

// React Things
import { useEffect } from "react";

//  Components
import * as UI from "react-daisyui";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Index() {
	return (
		<main>
			<Navbar></Navbar>
			<Footer></Footer>
		</main>
	);
}
