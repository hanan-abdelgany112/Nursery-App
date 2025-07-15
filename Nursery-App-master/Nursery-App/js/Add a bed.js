 function addToTable() {
      
      const fromt = document.getElementById('fromt').value;
      const fromDate = document.getElementById('fromDate').value;


      const now = new Date();
      const addedDate = now.toLocaleDateString();
      const addedBy = 'Admin'; 

      const table = document.getElementById("resultsTable").getElementsByTagName('tbody')[0];
      const row = table.insertRow();

      row.innerHTML = `
      <td>${fromt}</td>
        <td>${fromDate}</td>
        <td><button class="btn btn-info btn-sm" onclick="this.closest('tr').edit()">تعديل</button></td>
      `;

      document.getElementById('successMessage').style.display = 'block';
      setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
      }, 3000);
    }

    function calculateDevice() {
     
      alert('تم تنفيذ عملية الحساب (وهمية).');
    }