import {CustomSelect} from "./CustomSelect";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";


export default {
    tile: 'CustomSelect',
    component: CustomSelect
} as ComponentMeta<typeof CustomSelect>

const Template: ComponentStory<typeof CustomSelect> = (args) => <CustomSelect {...args}/>

export const Primary = Template.bind({})

Primary.args={
    label:'aaa',
    value: ['1','2','3'],
    selectItemCallback:action('selectCallback')
}