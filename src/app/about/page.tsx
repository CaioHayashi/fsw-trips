import React from "react";
import Trips from "./components/trips";

export const metadata = {
	title: "About"
};

const Page = () => {
	return (
		<div>
			<h1>About</h1>
            <Trips />
		</div>
	);
};

export default Page;
