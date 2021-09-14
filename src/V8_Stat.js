const  v8 = require( 'v8');

function getMyStats() {
    const stats2 = v8.getHeapStatistics();
    // console.log('stats2');
    console.log("total_heap_size:" + stats2['total_heap_size']);

    const stats = v8.getHeapSpaceStatistics();
    // Initialiing the list
    var myList = []
    for (let element of stats) {
        myList.push({
            "Name of the Space": element['space_name'],
            "Size of Space": element['space_size'],
            "Space Size Used": element['space_used_size'],
            "Space Size Available": element['space_available_size'],
            "Physical Space Size": element['physical_space_size']
        });
    }

    // Printing the data in tabular form
    console.table(myList)
}

getMyStats();