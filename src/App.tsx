import FindMe from "./components/FindMe";
import Header from "./components/Header";
import ProgrammingLanguage from "./components/ProgrammingLangueages";
import Works from "./components/Works";

export default function App() {
	return (
		<div className=" bg-sky-50 flex justify-center items-center">
			<div className="bg-white rounded-2xl py-14 px-6 w-[880px] md:w-[1000px] md:px-14">
				<div>
					<Header />
					<div className="my-14 border-t-2 border-[#E9E9E9]" />
					<ProgrammingLanguage />
					<Works />
					<FindMe />
				</div>
			</div>
		</div>
	);
}
