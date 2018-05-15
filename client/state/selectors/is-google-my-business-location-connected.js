/** @format */

/**
 * External dependencies
 */
import { get } from 'lodash';
import { getKeyringConnectionsByName } from 'state/sharing/keyring/selectors';

const getGoogleMyBusinessKeyringId = ( state, siteId ) => {
	return get( state, `siteSettings.items.${ siteId }.google_my_business_keyring_id`, null );
};

const getGoogleMyBusinessLocationId = ( state, siteId ) => {
	return get( state, `siteSettings.items.${ siteId }.google_my_business_location_id`, null );
};

export default function isGoogleMyBusinessLocationConnected( state, siteId ) {
	const keyringId = getGoogleMyBusinessKeyringId( state, siteId );

	if ( ! keyringId ) {
		return false;
	}

	const keyringConnections = getKeyringConnectionsByName( state, 'google_my_business' ).filter(
		keyringConnection => {
			return keyringConnection.ID === keyringId;
		}
	);

	if ( keyringConnections.length === 0 ) {
		return false;
	}

	return !! getGoogleMyBusinessLocationId( state, siteId );
}
