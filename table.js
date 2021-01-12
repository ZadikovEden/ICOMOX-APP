var tableData = [
    {
        "id": "07fe6dc8-1d3d-4cc4-b88a-c9fd0a40033b",
        "deviceId": "12a79ea4bfff7c381ce7030038343038",
        "alertType": "DEV_ALERT_SHAFT_LOOSE",
        "alertLevel": 0,
        "state": "CLOSED",
        "created": "2021-01-10T09:20:53.475465Z",
        "closed": "2021-01-10T09:31:14.447529Z",
        "asset": {
            "serial": "1234567899",
            "name": "Orisol3 TOP FAIL",
            "description": "Motor",
            "assetGroup": "FAIL",
            "polesCount": 4,
            "priority": 5,
            "maintenancePeriod": 0,
            "id": "5809ff89-9b49-4b3b-ba54-ff0cc7f05ac5",
            "devices": null,
            "alerts": null,
            "health": 0,
            "tenantId": "ab9c9eec-a7fe-4708-951c-dd9c06ee9c9c",
            "assetType": "GENERIC"
        }
    },
    {
        "id": "fd5dbb48-6dea-45c4-9f08-277222bfed9b",
        "deviceId": "12a79e28afff5c3949ee030038343038",
        "alertType": "DEV_ALERT_BEAR_WEAR",
        "alertLevel": 2,
        "state": "OPEN",
        "created": "2021-01-07T16:21:28.201534Z",
        "closed": null,
        "asset": {
            "serial": "111",
            "name": "Shiratech Office Motor2",
            "description": "Motor",
            "assetGroup": "Shiratech Office",
            "polesCount": 4,
            "priority": 5,
            "maintenancePeriod": 0,
            "id": "285c62bf-23c7-430e-b5db-7c0119caedfb",
            "devices": null,
            "alerts": null,
            "health": 0,
            "tenantId": "ab9c9eec-a7fe-4708-951c-dd9c06ee9c9c",
            "assetType": "GENERIC"
        }
    },
    {
        "id": "bd7c8ee6-3d6d-45c8-8207-f18a25787732",
        "deviceId": "12a79e745f1efd384019040038343038",
        "alertType": "DEV_ALERT_BEAR_WEAR",
        "alertLevel": 2,
        "state": "OPEN",
        "created": "2021-01-07T16:21:28.774029Z",
        "closed": null,
        "asset": {
            "serial": "90210",
            "name": "Test Bench",
            "description": "Motor",
            "assetGroup": "Shiratech ",
            "polesCount": 6,
            "priority": 5,
            "maintenancePeriod": 0,
            "id": "5044c29f-720e-4b37-8939-2b2c06567fd3",
            "devices": null,
            "alerts": null,
            "health": 0,
            "tenantId": "ab9c9eec-a7fe-4708-951c-dd9c06ee9c9c",
            "assetType": "GENERIC"
        }
    },
    
]
function buildTable() {
    for (var i in tableData){
        if (tableData[i].alertLevel=== 2){
            var row = `<tr>
                <td>${tableData[i].asset.serial}</td>
                <td>${tableData[i].asset.name}</td>
                <td>${tableData[i].alertType}</td>
                <td><i class="material-icons">chevron_right</i></td>
            </tr>`
            var table = $("#TableID")
            console.log(table);
            table.append(row)
        }
    }
}


// function buildTable(data){
//     var table = document.getElementById('TableID')

//     for (var i = 0; i < data.length; i++){
//         var row = `<tr>
//                         <td>${data[i].name}</td>
//                         <td>${data[i].age}</td>
//                         <td>${data[i].birthdate}</td>
//                   </tr>`
//         table.innerHTML += row


//     }
// }