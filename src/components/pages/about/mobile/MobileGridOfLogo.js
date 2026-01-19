import React from "react";
import items from "../logo-content-link";

const MobileGridOfLogo = () => {
	const getIconClassName = (iconClass) => {
		if (iconClass && typeof iconClass === "object") {
			const cls = iconClass.fill || iconClass.line;
			return typeof cls === "string" ? cls : "";
		}
		return typeof iconClass === "string" ? iconClass : "";
	};

	return (
		<div className="m-aboutLinksGrid">
			{items.map((item) => (
				<button
					key={item.key}
					type="button"
					className="m-aboutLink"
					onClick={() =>
						window.open(item.href, "_blank", "noopener,noreferrer")
					}
					aria-label={item.label}
				>
					<i className={getIconClassName(item.iconClass)} aria-hidden="true" />
					<span>{item.label}</span>
				</button>
			))}
		</div>
	);
};

export default React.memo(MobileGridOfLogo);
