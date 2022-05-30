import {ClockContainer} from "./Clock";
import {ComponentMeta, ComponentStory} from "@storybook/react";


export default {
    title: 'ClockContainer',
    component: ClockContainer
} as ComponentMeta<typeof ClockContainer>

const Template: ComponentStory<typeof ClockContainer> = (args) => <ClockContainer {...args}/>

export const Primary = Template.bind({})

Primary.args = {
    ClockLabel:'time',
    width:100
}
