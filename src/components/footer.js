import * as UI from "react-daisyui";
import * as Fi from "react-icons/fi";

export default function Footer() {
	return (
		<UI.Footer className="fixed bottom-0">
			<div className="bg-gray-800 w-full flex text-center justify-between flex-row p-3 px-16">
				<p className="text-xl">©2023 All right reserved</p>
				<a href="https://github.com/wibucodedev" target="_blank" className="link link-info text-xl">
					@wibucode
				</a>
			</div>
		</UI.Footer>
	);
}
