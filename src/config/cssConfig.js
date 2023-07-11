const CSS = [
    {
        heading: "CSS",
        pathname: "/css",
        children: [
            {
                title: "Id vs Class Selector",
                keywords: "css Id vs Class Selector",
                id: "id_vs_class_selector",
                list: [
                    'Id selector can only be used one time in a page',
                    'Class selector can use multiple times in one page',
                ]
            },
            {
                title: "Css Outline",
                keywords: "css outline",
                id: "css_outline",
                description: `An outline is a line drawn outside the element's border.`,
                list: [
                    'outline-style',
                    'outline-color',
                    'outline-width',
                    'outline-offset',
                    'outline',
                ]
            },
            {
                title: "Box Sizing",
                keywords: "css box sizing",
                id: "id_vs_class_selector",
                description: `By default, the width and height of an element is calculated like this:
                <br />
                width + padding + border = actual width of an element
                <br />
                height + padding + border = actual height of an element
                <br/>
                <br/>
                The CSS box-sizing property allows us to include the padding and border in an element's total width and height.`,
                list: [
                    '<b>box-sizing: border-box</b> - includes border and padding in the elements total width and height',
                    '<b>box-sizing: content-box</b> - does not includes border and padding in the elements total width and height',
                ]
            },
            {
                title: "Css Clear",
                keywords: "css clear",
                id: "css_clear",
                description: `The clear property controls the flow next to floated elements.
                <br /><br />
                The clear property specifies what should happen with the element that is next to a floating element.`,
            },
            {
                title: "Column Count",
                keywords: "css column count",
                id: "css_column_count",
                description: `The column-count property specifies the number of columns an element should be divided into.`,
            },
            {
                title: "Column Rule",
                keywords: "css column rule",
                id: "css_column_rule",
                description: `The column-rule property sets the width, style, and color of the rule between the columns of the element`,
            },
        ]
    }
];

export default CSS;
