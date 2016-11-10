"use strict";

export class Permissions {
	constructor(DachiUI) {
		this._activeUserPermissions = {};

		DachiUI.AJAX.on('ajax-pre', (err, data) => {
			if(err || typeof data.data != 'object' || data.data === null || typeof data.data.dachi_permissions != 'object')
				return;
			this._activeUserPermissions = data.data.dachi_permissions;
		});
	}

	check(bit) {
		if(this._activeUserPermissions[bit] === true)
			return true;

		return false;
	}
}
