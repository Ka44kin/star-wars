// import UiButton from "./UiButton";

// export default {
//     title : Ui-Kit/UiButton,
//     component : UiButton
// }
// import { Meta, StoryObj } from '@storybook/react';

// import { UiButton, ButtonProps } from './UiButton';

// const meta: Meta<typeof UiButton> = {
//   component: UiButton,
// };

// export default meta;
// type Story = StoryObj<typeof Button>;

// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };
import UiButton from './UiButton';

export default {
	title: 'Ui-Kit/UiButton',
	component: UiButton
};

const Template = (args) => <UiButton {...args} />;

const props = {
	text: 'Next`',
	onClick: () => console.log('Button Click'),
	disabled: false,
	theme: 'light',
	classes: '',
}

export const Light = Template.bind({});
Light.args = {
	...props,
	theme: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
	...props,
	theme: 'dark',
};

export const Disabled = Template.bind({});
Disabled.args = {
	...props,
	disabled: true,
};