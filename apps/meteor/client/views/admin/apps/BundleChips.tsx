import { Tag } from '@rocket.chat/fuselage';
import { useTranslation } from '@rocket.chat/ui-contexts';
import type { ReactElement } from 'react';
import React from 'react';

import type { App } from './types';

type BundleChipsProps = {
	bundledIn: {
		bundleId: string;
		bundleName: string;
		apps: App[];
	}[];
};

const BundleChips = ({ bundledIn }: BundleChipsProps): ReactElement => {
	const t = useTranslation();

	return (
		<>
			{bundledIn.map((bundle) => (
				<Fragment key={bundle.bundleId}>
					<Box ref={bundleRef} onMouseEnter={(): void => setIsHovered(true)} onMouseLeave={(): void => setIsHovered(false)}>
						<Tag variant='enterprise'>{bundle.bundleName}</Tag>
					</Box>
					<PositionAnimated
						anchor={bundleRef as RefObject<Element>}
						placement='top-middle'
						margin={8}
						visible={isHovered ? AnimatedVisibility.VISIBLE : AnimatedVisibility.HIDDEN}
					>
						<Tooltip>
							{t('this_app_is_included_with_subscription', {
								bundleName: bundle.bundleName,
							})}
						</Tooltip>
					</PositionAnimated>
				</Fragment>
			))}
		</>
	);
};

export default BundleChips;
