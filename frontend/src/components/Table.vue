<script setup>
import { ref, watch, onBeforeMount } from 'vue';
import TableToolbar from './TableToolbar.vue';
import { teamsPitchingStats } from '@/services/DatabaseService';

const props = defineProps({
	items: {
		type: Array
	}
})

onBeforeMount(() => {
	// console.log('team names: ', teamNames)
	console.log('teams pitching stasts in table', teamsPitchingStats)

});

const isBusy = ref(false);
const search = ref('');
const tableData = ref([]);
const feedbackErrorMessage = ref('');
const headers = ref([
	{ key: 'refName', title: 'Team Name', align: 'center', sortable: false },
	{ key: 'actions', title: 'Actions', align: 'center', sortable: false }
]);

function toggleDialog() {
	dialog.value = !dialog.value;
}


</script>

<template>
	<v-container>
		<TableToolbar 
				title="Fake title" 
			/>

			 <v-data-table
				:items="items"
				:items-per-page="10"
				:search="search"
				class="elevation-1"
			>
				<template v-slot:loading>
					<v-skeleton-loader ></v-skeleton-loader>
				</template>
				<!-- <template v-slot:item="{ item }">
					<tr>
						<td>
							<v-text-field
								@click="console.log(item)"
								
								:value="item.name"
								type="text"
								hide-details
							/>
							<v-text-field
								v-if="feedbackErrorMessage"
								:value="feedbackErrorMessage"
								disabled
								error-messages
								class="mt-2"
							/>
						</td>
						<td>
							<v-img :src="item.logoPath">

							</v-img>
						</td>
						<td style="width: 10%;">
							<v-chip
								class="custom-chip"
								small
								color="red"
								outlined
							>
							<v-icon icon="mdi-delete"/>
						</v-chip>
						</td>
					</tr>

				</template> -->
				<template v-slot:footer>
					<v-row>
						<v-col class="d-flex justify-end">
							<v-btn type="submit" color="success" class="ml-2">Save</v-btn>
							<v-btn color="error" class="ml-2">Back</v-btn>
						</v-col>
					</v-row>
				</template> 
			</v-data-table>
	</v-container>
			


	<!-- <v-dialog
			v-model="dialog"
			max-width="500px"
			persistent
		>
			<v-card style="background-color: #e3e4e8;">
				<v-card-title>
					<span class="text-h5">Confirm Delete</span>
				</v-card-title>
					<v-textarea v-model="dialogMessage" readonly auto-grow/>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
						color="red"
						variant="tonal"
						@click="cancelDeleteRef"
					>
						No
						<v-icon icon="mdi-close"/>
					</v-btn>
					<v-btn
						color="green"
						variant="tonal"
						@click="confirmDeleteRef"
						align="center"
					>
						Yes
						<v-icon icon="mdi-check" color="success"/>
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog> 
	</v-col>
</v-row> -->


</template>


<style>
#data-table {
	width: 100%;
}

#app-cell {
	border-style: none;
}

.custom-chip {
	margin: 10px;
	width: 50px; 
	justify-content: center;
}
</style>