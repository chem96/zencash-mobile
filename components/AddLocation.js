import React, {Component} from 'react';

import {platform} from 'onsenui';

import AddLocationDialog from '../containers/AddLocationDialog';

import {
  Fab,
  Icon,
  Button,
  Dialog
} from 'react-onsenui';

const AddLocation = ({onButtonClick}) => {
	let button;

	if (platform.isAndroid()) {
		button = (
			<Fab
        onClick={onButtonClick}
				ripple
				position='bottom right'>
				<Icon icon='md-plus' />
			</Fab>
		);
	}
	else {
		button = (
			<Button onClick={onButtonClick} modifier='large quiet'>Add location</Button>
		);
	}

	return (
		<div>
			{button}
      <AddLocationDialog />
		</div>
	);
};

export default AddLocation;