const JSLoad = 0,
    DocumentContentLoad = 1,
    WindowLoad = 2;

const state = {}
const flog = (...msg) => console.log(...msg)
const runnable = {
    load: async (entry) => {
        switch (entry) {
            case JSLoad:
                return 1;
                break;
            case DocumentContentLoad:
                return new Promise((resolve, reject) => {
                    document.addEventListener("DOMContentLoaded", function (event) {
                        // console.log("DOMContentLoaded")
                        resolve(1)
                    });
                });
                break;
            case WindowLoad:
                return new Promise((resolve, reject) => {
                    window.addEventListener("load", function (event) {
                        // console.log("WindowLoad")
                        resolve(1)
                    });
                });
                break;
        }
    },
    init: async (graph, avs) => {
        state.graph = graph
        state.avs = avs //avs = actions views states
        state.graph.events
            .filter(item => !!item.from)
            .forEach(evtItem => {
                evtItem.from && (state.avs[evtItem.from]["fire"] = (evtName, ...param) => async () => {
                    await runnable.handleEvts(evtName, ...param)
                })
            })

        let entryEvt = state.graph.events.find(evtItem => evtItem.entry >= 0);
        if (entryEvt) {
            await runnable.load(entryEvt.entry)
            runnable.handleEvts(entryEvt.name)
        }
    },

    handleEvts: async (evtName, data) => {
        let nextStepExp = state.graph.events.find(item => item.name == evtName)
        await nextStepExp && runnable.exec(nextStepExp.next, data)
    },
    exec: async (stepExp, returnValue) => {
        if (!Array.isArray(stepExp)) {
            stepExp = [stepExp]
        }
        let asyncFunc = []
        stepExp.forEach(sep => {
            asyncFunc.push(new Promise(async (resolve, reject) => {
                let step = runnable.findStep(sep)
                if (step.entry) {
                    await runnable.load(step.entry)
                }
                let params = []
                if (step.param) {
                    params = runnable.handleParam(step.param, returnValue)
                }
                let output = await state.avs[sep.split("_")[0]][sep.split("_")[1]](...params)

                let hasAllDataField = true;
                if (step.filter) {
                    hasAllDataField = runnable.handleFilter(step.filter, output)
                }
                hasAllDataField && step.next && runnable.exec(step.next, output)
                resolve(1)
            }))
        })
        await Promise.all(asyncFunc)


    },
    findStep: (sep) => {
        return state.graph[sep.split("_")[0]][sep.split("_")[1]]
    },
    handleFilter: (filter, output) => {
        let hasAllData = true;
        output && filter.split(".").forEach(key => {
            if (output[key] == null) {
                hasAllData = false
            }
        })
        !output && (hasAllData = false)
        return hasAllData
    },
    handleParam: (paramExp, returnValue) => {
        let params = [];
        if (!paramExp) return params;
        if (!Array.isArray(paramExp)) {
            paramExp = [paramExp]
        }
        paramExp.forEach(item => {
            if (item == "$") {
                params.push(returnValue)
            } else {
                params.push(state.avs[item])
            }
        })
        return params;
    }

}

export default async (graph, avs) => {
    runnable.init(graph, avs)
}