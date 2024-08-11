import { useState } from "react";

function App() {
	return (
		<>
			<section
				id="landing-section"
				className="h-screen bg-ko-brunswick-green-2 text-ko-light-cyan"
			>
				<div
					className="md:container p-5mx-auto h-full flex flex-col justify-center items-center
          gap-5"
				>
					<h1
						className="main-title text-3xl sm:text-4xl md:text-5xl text-center font-special-elite
            max-w-lg"
					>
						This is Kadeem's Main Github Page
					</h1>

					<a href="https://kadeem.online" className="cta">
						<button
							className="group/cta cursor-pointer bg-ko-quinacridone-magenta rounded-md text-whitefont-semibold
              transition duration-300 ease-in-out hover:bg-ko-raspberry/95 hover:ring-2
              hover:ring-ko-tiffany-blue hover:shadow-xl hover:shadow-ko-mint-green focus:ring-ko-mint-green
              focus:shadow-ko-mint-green hover:-translate-y-1 px-5 py-2"
						>
							<span
								className="font-amatic-sc font-bold text-4xl transition-all group-hover/cta:-translate-y-[2px]
								inline-block"
							>
								Visit Website
							</span>
						</button>
					</a>
				</div>
			</section>
		</>
	);
}

export default App;
