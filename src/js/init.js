import { defaults } from "./modules/defaults";
import { forms } from "./modules/forms";
import { button } from "./modules/button";
import { sliders } from "./modules/slider";
import { modals } from "./modules/modals";
import { config } from "./config";

var App = () => {

	defaults.init();
	forms.init();
	modals.init();
	button.init();
	sliders.init();

	config.log('app init')
	
};

export { App };