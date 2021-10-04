import React, { useRef } from 'react'
import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid'
import { sampleData } from '../datasource'
import { Filter, Inject, Edit, Toolbar, ContextMenu, Sort, Resize, ExcelExport, PdfExport } from '@syncfusion/ej2-react-treegrid';




export const Sync = () => {
  const toolbarOptions = ['ExpandAll', 'CollapseAll']
  const contextMenuItems = ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending', 'Edit', 'Delete', 'Save',
    'Cancel', 'PdfExport', 'ExcelExport', 'CsvExport'];

  const validationRule = { required: true };
  const validationRule1 = { date: true };
  const validationRule2 = { required: true, number: true };
  const editparams2 = { params: { format: 'n' } };
  const editparams = { params: { popupHeight: '300px' } };
  const pageSettings = { pageSize: 10, pageCount: 2 };


  const editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    mode: 'Dialog',
  }


  return (
    <div className="">
      <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height="500" toolbar={['Add', 'Edit', 'Update', 'Cancel', ...toolbarOptions]} allowSorting='true' editSettings={editSettings} allowExcelExport='true' allowPdfExport='true' pageSettings={pageSettings} contextMenuItems={contextMenuItems}>
        <ColumnsDirective>
          <ColumnDirective type='checkbox' width='50'></ColumnDirective>
          <ColumnDirective field="taskID" toolbar={['ExpandAll', 'CollapseAll']} headerText="Task Id" width="100" validationRules={validationRule} isPrimaryKey={true} />
          <ColumnDirective field="taskName" headerText="Task Name" width="120" validationRules={validationRule} />
          <ColumnDirective field="startDate" headerText="Start Date" width="100" textAlign="Right" editType='datepickeredit' type='date' format='yMd' validationRules={validationRule1} />
          <ColumnDirective field="endDate" headerText="End Date" width="100" editType='datepickeredit' type='date' format='yMd' validationRules={validationRule1} />
          <ColumnDirective field="duration" headerText="Duration" width="100" dataType='date' editType='numericedit' textAlign='Left'
            validationRules={validationRule2} edit={editparams2} />
          <ColumnDirective field="progress" headerText="Progress" width="100" editType='dropdownedit' edit={editparams} />
          <ColumnDirective field="priority" headerText="Priority" width="100" textAlign='Left' />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar, ContextMenu, Sort, Resize, Filter, ExcelExport, PdfExport]} />
      </TreeGridComponent>
    </div>

  )
}
export default Sync