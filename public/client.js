console.log('Client-side code running');

const button = document.getElementById('myButton');

function load_function() {

    fetch('/start', {
        method: 'GET'
    })
        .then(function (response) {
            return response.text();
        }).then(function (data) {

            // update annotation_identifier and src of image el
            let image_el = document.getElementById('image');

            let splitted = data.split("---");
            let version = splitted[0];
            let id_ = splitted[1];
            image_el.setAttribute("annotation_identifier", id_);
            image_el.setAttribute("data", `${version}/${id_}.svg`);
        })
}

button.addEventListener('click', function (e) {

    let image_el = document.getElementById('image');
    let annotated_id = image_el.getAttribute("annotation_identifier");

    let link_quality_el = document.getElementById('link_quality');
    let link_quality_value = link_quality_el.value;

    let proposal_el = document.getElementById('proposal');
    let proposal_value = proposal_el.value;

    console.log('button was clicked');
    console.log(annotated_id);
    console.log(link_quality_value);
    console.log(proposal_value);

    let fetch_url = '/clicked?identifier=' + annotated_id + '&link_quality=' + link_quality_value + '&proposal=' + proposal_value;
    fetch(fetch_url, {
        method: 'GET'
    })
    .then(function (response) {
        return response.text();
    }).then(function (data) {
        // update annotation_identifier and src of image el

        let splitted = data.split("---");
        let version = splitted[0];
        let id_ = splitted[1];
        image_el.setAttribute("annotation_identifier", id_);
        image_el.setAttribute("data", `${version}/${id_}.svg`);
    })
});
