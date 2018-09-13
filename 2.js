setTimeout(() => {
  console.log('worked');
  var dataTree = [
    {
      text: "Parent 1",
      nodes: [
        {
          text: "Child 1",
          nodes: [
            {
              text: "Grandchild 1"
            },
            {
              text: "Grandchild 2"
            }
          ]
        },
        {
          text: "Child 2"
        }
      ]
    },
    {
      text: "Parent 2"
    },
    {
      text: "Parent 3"
    },
    {
      text: "Parent 4"
    },
    {
      text: "Parent 5"
    }
  ];
   
  var treeView = $('#tree-view');
  
  console.log(treeView);
  console.log(treeView.treeview);
  if (treeView != null && typeof treeView.treeview == 'function') {
    treeView.treeview({data: dataTree});
  }
}, 30000);
