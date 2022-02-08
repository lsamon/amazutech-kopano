// Create the namespace that will be used for this plugin
Ext.namespace('Zarafa.plugins.amazutech');

/**
 * A theme plugin should extend {@link Zarafa.core.ThemePlugin}. If it only changes the css
 * there is nothing to implement in this class.
 * @class Zarafa.plugins.amazutech.Theme
 * @extends Zarafa.core.ThemePlugin
 */
Zarafa.plugins.amazutech.Theme = Ext.extend(Zarafa.core.ThemePlugin, {});

// Register the plugin with the container after the WebApp has loaded.
Zarafa.onReady(function() {
	container.registerPlugin(new Zarafa.core.PluginMetaData({

		// To avoid problems the name of a plugin should be exactly the same as the
		// the name of the directory it is located in.
		name : 'amazutech',

		// The displayName is what will be shown in the dropdown in which the user can pick a theme
		displayName : _('Amazutech Theme'),

		// Do not allow the user to disable this plugin
		allowUserDisable : false,

		// Do not show this plugin in the plugin list
		allowUserVisible : false,

		pluginConstructor : Zarafa.plugins.amazutech.Theme,
	}));
});