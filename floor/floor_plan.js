function showPreview(event, id) 
{
    document.getElementById(id).style.display = "block";
}

function hidePreview(id) 
{
    document.getElementById(id).style.display = "none";
}

function redirectToUnit(url) 
{
    window.location.href = url;
}

//local test
//<button onclick="openAndDownload()">View & Download Floor Plan</button>

//<script>
//function openAndDownload() {
    // Open PDF in a new tab
    //window.open('floorplan.pdf', '_blank');

    // Force download after 1 second
    //setTimeout(() => {
        //const link = document.createElement('a');
        //link.href = 'floorplan.pdf';
        //link.download = 'TheProject.pdf';
        //document.body.appendChild(link);
        //link.click();
        //document.body.removeChild(link);
    //}, 1000);
//}
//</script>
