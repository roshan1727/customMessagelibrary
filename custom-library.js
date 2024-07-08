// Custom library JavaScript file: custom-library.js

// CSS styles for the message card
const styles = `
.message-card {
    padding: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    animation: cheer-up 1s ease-in-out;
}

@keyframes cheer-up {
    0% {
        transform: scale(0.9);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
`;

// Inject the styles into the document head
const styleElement = document.createElement('style');
styleElement.appendChild(document.createTextNode(styles));
document.head.appendChild(styleElement);

// Function to create a message card with a cheer-up animation
function createMessageCard(message) {
    const card = document.createElement('div');
    card.classList.add('message-card');
    card.textContent = message;
    return card;
}

// Function to create an SAP UI5 table
function createTable() {
    const Table = sap.ui.require('sap/m/Table');
    const Column = sap.ui.require('sap/m/Column');
    const Label = sap.ui.require('sap/m/Label');
    const ColumnListItem = sap.ui.require('sap/m/ColumnListItem');
    const Text = sap.ui.require('sap/m/Text');
    const Model = sap.ui.require('sap/ui/model/json/JSONModel');

    const oTable = new Table({
        inset: true,
        headerText: "Sample Table",
        columns: [
            new Column({
                header: new Label({ text: "Column 1" })
            }),
            new Column({
                header: new Label({ text: "Column 2" })
            })
        ]
    });

    const aData = [
        { col1: "Row 1, Col 1", col2: "Row 1, Col 2" },
        { col1: "Row 2, Col 1", col2: "Row 2, Col 2" }
    ];

    const oModel = new Model();
    oModel.setData({ rows: aData });
    oTable.setModel(oModel);

    const oTemplate = new ColumnListItem({
        cells: [
            new Text({ text: "{col1}" }),
            new Text({ text: "{col2}" })
        ]
    });

    oTable.bindItems("/rows", oTemplate);

    return oTable;
}

// Exporting the functions for use in other scripts
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
        createMessageCard: createMessageCard,
        createTable: createTable
    };
}
