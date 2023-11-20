const libraryForm = document.getElementById('library-form');
const libraryId = document.getElementById('library-id');
const libraryAddress = document.getElementById('library-address');

// Send POST to API to add library
async function addLibrary(e) {
  e.preventDefault();

  if (libraryId.value === '' || libraryAddress.value === '') {
    alert('Please fill in fields');
  }

  const sendBody = {
    libraryId:libraryId.value,
    address: libraryAddress.value
  };

  try {
    const res = await fetch('/api/v1/libraries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendBody)
    });

    if (res.status === 400) {
      throw Error('Library already exists!');
    }

    alert('Library added!');
    window.location.href = '/index.html';
  } catch (err) {
    alert(err);
    return;
  }
}

libraryForm.addEventListener('submit', addLibrary);
