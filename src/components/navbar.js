import { useState } from "react";
import * as UI from "react-daisyui";
import * as Fi from "react-icons/fi";

export default function Navbar() {
	return (
		<UI.Navbar className="bg-gray-800 mt-0 sticky top-0 backdrop-blur-sm px-12">
			<UI.Navbar.Start>
				<UI.Dropdown>
					<UI.Dropdown.Toggle color="ghost">
						<Fi.FiMenu size={"24px"}></Fi.FiMenu>
					</UI.Dropdown.Toggle>
					<UI.Dropdown.Menu className="my-2 shadow-md rounded-md bg-gray-800 outline outline-1 outline-gray-600">
						<UI.Dropdown.Item href="/about" className="items-center"><Fi.FiInfo></Fi.FiInfo>About</UI.Dropdown.Item>
						<UI.Dropdown.Item href="/category">Category</UI.Dropdown.Item>
						<UI.Dropdown.Item href="/donate">Donate</UI.Dropdown.Item>
					</UI.Dropdown.Menu>
				</UI.Dropdown>
			</UI.Navbar.Start>
			<UI.Navbar.Center>
				<h1 className="text-cyan-500 text-xl font-sans font-bold">Anime Quotes</h1>
			</UI.Navbar.Center>
			<UI.Navbar.End>
				<UI.Button color="ghost" htmlFor="my-modal">
					<Fi.FiSearch size={"24"}></Fi.FiSearch>
				</UI.Button>
				<UI.Button color="ghost">
					<Fi.FiSun size={"24"}></Fi.FiSun>
				</UI.Button>
			</UI.Navbar.End>
		</UI.Navbar>
	);
}
