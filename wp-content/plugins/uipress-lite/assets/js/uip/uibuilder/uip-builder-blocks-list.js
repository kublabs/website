/**
 * Builds the main ui builder shell
 * @since 3.0.0
 */
const { __, _x, _n, _nx } = wp.i18n;
export function moduleData() {
  return {
    props: {
      mode: String,
      insertArea: Array,
    },
    data: function () {
      return {
        loading: true,
        categories: [],
        search: '',
        sortedBlocks: this.uipData.blocks.sort((a, b) => a.name.localeCompare(b.name)),
        strings: {
          proBlock: __('This block requires uipress pro. Upgrade to unlock.', 'uipress-lite'),
          seachBlocks: __('Search blocks...', 'uipress-lite'),
        },
      };
    },
    inject: ['uipData', 'router', 'uipress', 'uiTemplate'],
    mounted: function () {
      this.loading = false;
      this.returnGroups;
      let newGrouping = [];
      for (let [index, block] of this.sortedBlocks.entries()) {
        if (block.moduleName != 'responsive-grid' && block.moduleName != 'uip-admin-menu' && block.moduleName != 'uip-user-meta-block') {
          newGrouping.push(block);
        }
      }

      this.sortedBlocks = newGrouping;
    },
    computed: {
      returnCats() {
        let cats = [];
        let self = this;
        let organisedBlocks = [];

        for (let cat in this.returnGroups) {
          let categoryBlocks = this.uipData.blocks.filter((c) => c.group == cat);
          let tempers = categoryBlocks.sort((a, b) => a.name.localeCompare(b.name));
          let sortedBlocks = [];

          for (let block of tempers) {
            if (block.moduleName != 'responsive-grid' && block.moduleName != 'uip-admin-menu' && block.moduleName != 'uip-user-meta-block') {
              sortedBlocks.push(block);
            }
          }

          let temp = {
            name: this.returnGroups[cat].label,
            blocks: sortedBlocks,
          };
          organisedBlocks.push(temp);
        }

        return organisedBlocks;
      },
      returnGroups() {
        return this.uipData.blockGroups;
      },
    },
    methods: {
      catHasChildren(cat) {
        let show = false;
        for (let [index, block] of cat.blocks.entries()) {
          if (this.inSearch(block)) {
            show = true;
          }
        }
        return show;
      },
      clone(block) {
        let item = JSON.parse(JSON.stringify(block));

        delete item.path;
        delete item.args;

        delete item.category;

        delete item.description;

        delete item.path;

        return item;
      },
      componentExists(mod) {
        if (mod.premium && !this.uiTemplate.proActivated) {
          return false;
        }
        let name = mod.moduleName;
        if (this.$root._.appContext.components[name]) {
          return true;
        } else {
          return false;
        }
      },
      insertAtPos(block) {
        //Check if we allowing click from modal list
        if (this.mode != 'click') {
          return;
        }
        if (Array.isArray(this.insertArea)) {
          let item = this.clone(block);
          item.uid = this.uipress.createUID();
          this.insertArea.push(item);

          //Open block
          let ID = self.$route.params.templateID;
          this.router.push({
            path: '/uibuilder/' + ID + '/settings/blocks/' + item.uid,
            query: { ...this.$route.query },
          });

          let newTem = JSON.parse(JSON.stringify(this.uiTemplate.content));
          this.uipress.logHistoryChange(item.name + __(' added', 'uipress-lite'), newTem, newTem);
        }
      },
      inSearch(block) {
        if (this.search == '') {
          return true;
        }
        let str = this.search.toLowerCase();

        if (block.name.toLowerCase().includes(str)) {
          return true;
        }
        if (block.description.toLowerCase().includes(str)) {
          return true;
        }
        return false;
      },
    },
    template: `
    
    <div class="">
    
        <div class="uip-flex uip-padding-xxs uip-search-block uip-border-round uip-margin-bottom-s">
          <span class="uip-icon uip-text-muted uip-margin-right-xs uip-text-l uip-icon uip-icon-medium">search</span>
          <input class="uip-blank-input uip-flex-grow uip-text-s" type="search" :placeholder="strings.seachBlocks" autofocus="" v-model="search">
        </div>
        
        <!--Searching-->
        <uip-draggable v-if="search != ''"
          :list="sortedBlocks" 
          class="uip-grid-col-3 uip-grid-gap-xs uip-flex-center"
          handle=".uip-block-drag"
          :group="{ name: 'uip-blocks', pull: 'clone', put: false, revertClone: true }"
          animation="300"
          :sort="false"
          :clone="clone"
          itemKey="name">
            <template v-for="(element, index) in sortedBlocks" :key="element.name" :index="index">
          
                <div v-show="componentExists(element) && inSearch(element)" class="uip-block-item" :block-name="element.name">
                    <div @click="insertAtPos(element)" class="uip-border-rounder uip-padding-xs uip-link-default uip-background-muted hover:uip-background-grey uip-cursor-pointer uip-block-drag uip-no-text-select">
                      <div class="uip-flex uip-flex-column uip-flex-center">
                        <div class="uip-icon uip-icon-medium uip-text-xl">
                          {{element.icon}}
                        </div> 
                        <div class="uip-text-center uip-text-s">{{element.name}}</div>
                      </div>
                    </div>
                </div>
            
            </template>
        </uip-draggable>
              
        
        <template v-if="search == ''" v-for="cat in returnCats">
          
            <div class="uip-flex uip-margin-bottom-s uip-border-rounder uip-border-round uip-text-bold uip-text-emphasis">{{cat.name}}</div>
            <div class=" uip-margin-bottom-s uip-flex-wrap uip-flex-row">
          
            
              <uip-draggable 
                :list="cat.blocks" 
                class="uip-grid-col-3 uip-grid-gap-xs uip-flex-center"
                handle=".uip-block-drag"
                :group="{ name: 'uip-blocks', pull: 'clone', put: false, revertClone: true }"
                animation="300"
                :sort="false"
                :clone="clone"
                itemKey="name">
                  <template v-for="(element, index) in cat.blocks" :key="element.name" :index="index">
                
                      <div v-if="componentExists(element) && inSearch(element)" class="uip-block-item" :block-name="element.name">
                        <uip-tooltip :message="element.description" :delay="500">
                          <div @click="insertAtPos(element)" class="uip-border-rounder uip-padding-xs uip-link-default uip-background-muted hover:uip-background-grey uip-cursor-pointer uip-block-drag uip-no-text-select">
                            <div class="uip-flex uip-flex-column uip-flex-center">
                              <div class="uip-icon uip-icon-medium uip-text-xl">
                                {{element.icon}}
                              </div> 
                              <div class="uip-text-center uip-text-s">{{element.name}}</div>
                            </div>
                          </div>
                        </uip-tooltip>
                      </div>
                      
                      <div v-else-if="inSearch(element)" class="uip-block-item" :block-name="element.name">
                        <uip-tooltip :message="strings.proBlock" :delay="200">
                          <div class="uip-border-rounder uip-padding-xs uip-background-green-wash uip-cursor-pointer">
                            <div class="uip-flex uip-flex-column uip-flex-center">
                              <div class="uip-icon uip-icon-medium uip-text-xl">
                                redeem
                              </div> 
                              <div class="uip-text-center uip-text-xs uip-text-s">{{element.name}}</div>
                            </div>
                          </div>
                        </uip-tooltip>
                      </div>
                  
                  </template>
              </uip-draggable>
              
            
            </div>
          
        </template>
      </div>`,
  };
  return compData;
}
