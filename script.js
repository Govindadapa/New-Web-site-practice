function search() {
    // Get the input value and convert to lower case for case-insensitive search
    const query = document.getElementById('search-input').value.toLowerCase();
  
    // Get all elements to search within; you may need to adjust the selector based on your HTML structure
    const items = document.querySelectorAll('.searchable');
  
    // Iterate through each item
    items.forEach(item => {
      // Get the text content of the item and convert to lower case
      const text = item.textContent.toLowerCase();
  
      // Toggle the visibility based on whether the query matches the item's text
      if (text.includes(query) || query === '') {
        item.style.display = ''; // Show item if query matches
      } else {
        item.style.display = 'none'; // Hide item if query does not match
      }
    });
  }

  function highlightText(text, query) {
    if (!query) return text; // Return original text if no query
  
    // Create a regular expression to find the query in the text
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
  }

  document.querySelectorAll('td').forEach(td => {
    const link = document.createElement('a');
    link.href = 'https://marketstudy.online/';
    link.innerHTML = td.innerHTML;
    td.innerHTML = '';
    td.appendChild(link);
  });
  
