import {
	CopyrightIcon,
	InstagramLogoIcon,
	TiktokLogoIcon,
} from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";

export function Footer() {
	return (
		<footer className="flex flex-col px-7 border-t border-t-muted-foreground/50 py-6 gap-5">
			<div className="shrink-0 flex items-center">
				<span className="font-bold">Pass The Story Library</span>
			</div>

			<section className="grid grid-cols-1 gap-3 md:grid-cols-2">
				<div className="flex flex-col gap-2">
					<h2 className="font-semibold">Follow Us</h2>
					<a
						href="https://www.instagram.com/pass.thestory/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="flex gap-1 text-muted-foreground items-center text-sm">
							<InstagramLogoIcon className="size-4 fill-foreground" />
							Instagram
						</div>
					</a>

					<a
						href="https://www.tiktok.com/@pass.thestory"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="flex gap-1 text-muted-foreground items-center text-sm">
							<TiktokLogoIcon className="size-4 fill-foreground" />
							Tiktok
						</div>
					</a>
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="font-semibold">Help & Guidelines</h2>
					<a
						href="mailto:passthestory.batam@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground text-sm"
					>
						Email
					</a>
					<Link to="/privacy-policy" className="text-muted-foreground text-sm">
						Privacy Policy
					</Link>

					<Link
						to="/terms-and-conditions"
						className="text-muted-foreground text-sm"
					>
						Terms of Service
					</Link>
				</div>
			</section>

			<section className="flex gap-1 items-center text-muted-foreground">
				<CopyrightIcon className="size-4" />
				<p className="text-sm">Pass The Story Library, 2026</p>
			</section>
		</footer>
	);
}
