import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import { Combo } from './';

// Here we describe the stories we want to see of the Button. The component is
// pretty simple so we will just make two, one with text and one with emojis
// Simple call storiesOf and then chain .add() as many times as you wish
//
// .add() takes a name and then a function that should return what you want
// rendered in the rendering area
storiesOf('Combo')
	.add('with value and label props', () => (
		<Combo option={
{
	label: 'وضعیت',
		items: [
	{code: 1, title: 'فعال'},
	{code: 2, title: 'غیر فعال'},
],
	valueProp:'code',
	labelProp:'title',
	onChange: action('onChange'),
	disabled:false,
	selectedValue:1,
}
}/>
))
.add('with disabled', () => (
	<Combo option={
{
	label: 'وضعیت',
		items: [
	{code: 1, title: 'فعال'},
	{code: 2, title: 'غیر فعال'},
],
	valueProp:'code',
	labelProp:'title',
	onChange: action('onChange'),
	disabled:true,
	selectedValue:2,
}
}/>
));

