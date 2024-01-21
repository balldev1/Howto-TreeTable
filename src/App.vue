<template>
    <div class="card">
    <TreeTable :value="nodes">
      <Column field="name" header="Name" expander></Column>
      <Column field="size" header="Size"></Column>
      <Column field="type" header="Type"></Column>
      <Column field="key" header="Key"></Column>
      <Column header="Action">
        <template #body="slotProps">
          <button @click="handleButtonClick(slotProps.rowData.data.key)"
            class="btn btn-primary btn-sm"
          >Click Me</button>
        </template>
      </Column> 
      <Column header="Action">
        <template #body="slotProps">
          <button @click="handleButtonClick(slotProps.rowData.data.key)"
          class="btn btn-primary btn-sm"
          >Click Me</button>
        </template>
      </Column> 
    </TreeTable>
  </div>
  <div>
    <OrganizationChart v-model:selectionKeys="selection" :value="data" collapsible selectionMode="multiple">
    <template #person="slotProps">
        <div class="flex flex-col">
            <div class="flex flex-col items-center">
                <img :alt="slotProps.node.data.name" :src="slotProps.node.data.image" class="mb-3 w-[3rem] h-[3rem]" />
                <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                <span>{{ slotProps.node.data.title }}</span>
            </div>
        </div>
    </template>
    <template #default="slotProps">
        <span>{{ slotProps.node.label }}</span>
    </template>
</OrganizationChart>
  </div>
</template>

<script setup>
import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';
import OrganizationChart from 'primevue/organizationchart';


const nodes = ref(null);

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => {
        nodes.value = data;
    });
});

const data = ref({
    key: '0',
    type: 'person',
    data: {
        image: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
        name: 'Modern network_',
        title: 'CEO'
    },
    children: [
        {
            key: '0_0',
            type: 'person',
            data: {
                image: 'https://primefaces.org/cdn/primevue/images/avatar/annafali.png',
                name: 'Optimus Co.ltd',
                title: '_Partner'
            },
            children: [
                {
                    key: '0_0_0',
                    label: 'Sales'
                },
                {
                    key: '0_0_"1',
                    label: 'Marketing'
                }
            ]
        },
        {
            key: '0_1',
            type: 'person',
            data: {
                image: 'https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png',
                name: 'Buzz',
                title: '_Partner'
            },
            children: [
                {
                    key: '0_1_0',
                    label: 'Development'
                },
                {
                    key: '0_1_1',
                    label: 'UI/UX Design'
                }
            ]
        }
    ]
});
const selection = ref({});

</script>
