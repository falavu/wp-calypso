/** @format */

/**
 * Internal dependencies
 */
import getPartnerSlugFromQuery from 'state/selectors/get-partner-slug-from-query';

describe( '#getPartnerSlugFromQuery', () => {
	test( 'should return null when no argument', () => {
		expect( getPartnerSlugFromQuery() ).toBeNull();
	} );

	test( 'should return null if no partner_id query present', () => {
		const state = {
			ui: {
				route: {
					query: {
						initial: {
							email_address: 'user@wordpress.com',
						},
					},
				},
			},
		};
		expect( getPartnerSlugFromQuery( state ) ).toBeNull();
	} );

	test( 'should return null when partner_id present but not integer', () => {
		const state = {
			ui: {
				route: {
					query: {
						initial: {
							email_address: 'user@wordpress.com',
							partner_id: 'meh',
						},
					},
				},
			},
		};

		expect( getPartnerSlugFromQuery( state ) ).toBeNull();
	} );

	test( 'should return pressable when partner_id is 49640', () => {
		const state = {
			ui: {
				route: {
					query: {
						initial: {
							email_address: 'user@wordpress.com',
							partner_id: '49640',
						},
					},
				},
			},
		};

		expect( getPartnerSlugFromQuery( state ) ).toBe( 'pressable' );
	} );
} );
