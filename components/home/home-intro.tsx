import Logo from "@/components/shared/logo";
import { buttonVariants } from "@/components/ui/button";
import { getHomeIntroScript } from "./home-intro-script";
import "lenis/dist/lenis.css";
import "./home-intro.css";

const logoColors = { ink: "var(--secondary)", accent: "var(--primary)" };

export default async function HomeIntro() {
	const script = await getHomeIntroScript();
	return (
		<>
			<dialog
				className="home-intro"
				data-home-intro=""
				aria-label="ADMR Technologies introduction"
				suppressHydrationWarning
			>
				<div className="home-intro-scroll" data-phase="loading" tabIndex={-1} suppressHydrationWarning>
					<div className="home-intro-scroll-content">
						<div className="home-intro-stage">
							<span className="sr-only home-intro-status" role="status">Loading ADMR Technologies</span>
							<div className="home-intro-wordmark" aria-hidden="true" suppressHydrationWarning>
								<Logo {...logoColors} />
							</div>
							<div className="home-intro-mark" aria-hidden="true">
								<div className="home-intro-mark-position" suppressHydrationWarning>
									<div className="home-intro-zoom" suppressHydrationWarning>
										<Logo {...logoColors} width={26.2881} height={18.7483} viewBox="0 0 26.2881 18.7483" />
									</div>
								</div>
							</div>
							<div className="home-intro-loading" aria-hidden="true" suppressHydrationWarning>
								<p className="home-intro-loading-label">Loading...</p>
								<div className="home-intro-track">
									<div className="home-intro-fill" />
								</div>
								<p className="home-intro-number" />
							</div>
							<div className="home-intro-cue" inert suppressHydrationWarning>
								<button
									type="button"
									className={buttonVariants({ variant: "ghost", className: "home-intro-button" })}
									aria-label="Scroll down to enter the homepage"
								>
									Scroll down
									<span className="home-intro-arrow" aria-hidden="true" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</dialog>
			<script dangerouslySetInnerHTML={{ __html: script }} />
		</>
	);
}
