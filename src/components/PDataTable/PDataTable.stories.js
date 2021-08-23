import PDataTableNew from './PDataTable.vue';
import { PPopover } from '../PPopover';
import { PButton } from '../PButton';
import { POptionList } from '../POptionList';
import { PCard } from '../PCard';
import argTypes from './args';
export default {
    title: 'Lists & Tables / Data Table',
    component: PDataTableNew,
    argTypes
}

const Template = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {
        PDataTableNew, PPopover, PButton, POptionList, PCard
    },
    data() {
        return {
            active: false,
            active2: false,
            selected: [],
            status: ["Active"],
        };
    },
    template: `
      <PCard sectioned>
        <PDataTableNew
            v-bind="$props"
            footer-content="Showing 3 of 3"
        />
      </PCard>`,
});

export const Default = Template.bind({});

Default.args = {
    columnContentTypes: [],
    headings: [
        {
            content: 'Product',
            value: 'product',
            type: 'text',
            width: '30%'
        },
        {
            content: 'Price',
            value: 'price',
            type: 'numeric',
        },
        {
            content: 'SKU Number',
            value: 'sku',
            type: 'numeric',
        },
        {
            content: 'Net quantity',
            value: 'qty',
            type: 'numeric',
        },
        {
            content: 'Net sales',
            value: 'netSales',
            type: 'numeric',
        },
    ],
    rows: [
        {
            product: 'Emerald Silk Gown',
            product_link: 'javascript:void(0);',
            price: '$875.00',
            sku: 124689,
            sku_status: 'critical',
            sku_progress: 'incomplete',
            qty: 140,
            netSales: '$121,500.00',
        },
        {
            product: 'Mauve Cashmere Scarf',
            product_link: "javascript:void(0);",
            price: '$230.00',
            sku: 124533,
            sku_status: 'warning',
            sku_progress: 'partiallyComplete',
            qty: 83,
            netSales: '$19,090.00',
        },
        {
            product: 'Navy Merino Wool Blazer with khaki chinos and yellow belt',
            product_link: "javascript:void(0);",
            price: '$445.00',
            sku: 124518,
            sku_status: 'success',
            sku_progress: 'complete',
            qty: 32,
            netSales: '$14,240.00',
        },
    ],
    totals: [
        '', '', '', 255, '$155,830.00',
    ],
}
