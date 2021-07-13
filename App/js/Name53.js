// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
// Sub module don't support async functions
xui.Class('App.Name53', 'xui.Module',{
    Instance:{
        // Dependencies css
        Dependencies: [],
        // Required modules
        Required:[],
        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.FusionChartsXT")
                .setHost(host,"xui_ui_fusionchartsxt1")
                .setLeft("13.714285714285714em")
                .setTop("8.380952380952381em")
                .setWidth("30.01904761904762em")
                .setHeight("24.99047619047619em")
                .setChartType("Bubble")
                .setJSONData({
                    "chart" : {
                        "numberprefix" : "$",
                        "is3d" : "1",
                        "animation" : "1",
                        "clipbubbles" : "1",
                        "xaxismaxvalue" : "100",
                        "showplotborder" : "0",
                        "xaxisname" : "x-axis",
                        "yaxisname" : "y-axis",
                        "chartrightmargin" : "30",
                        "drawquadrant" : "1",
                        "quadrantlabeltl" : "Top Left Quadrant",
                        "quadrantlabeltr" : "Top Right Quadrant",
                        "quadrantlabelbr" : "Bottom Right Quadrant",
                        "quadrantlabelbl" : "Bottom Left Quadrant",
                        "quadrantlinethickness" : "1",
                        "quadrantlinecolor" : "000080",
                        "canvasbgalpha" : "100",
                        "bgcolor" : "C7C7C7",
                        "quadrantxval" : "58",
                        "quadrantyval" : "2.3"
                    },
                    "categories" : [
                        {
                            "category" : [
                                {
                                    "label" : "0%",
                                    "x" : "0"
                                },
                                {
                                    "label" : "20%",
                                    "x" : "20",
                                    "showverticalline" : "1"
                                },
                                {
                                    "label" : "40%",
                                    "x" : "40",
                                    "showverticalline" : "1"
                                },
                                {
                                    "label" : "60%",
                                    "x" : "60",
                                    "showverticalline" : "1"
                                },
                                {
                                    "label" : "80%",
                                    "x" : "80",
                                    "showverticalline" : "1"
                                },
                                {
                                    "label" : "100%",
                                    "x" : "100",
                                    "showverticalline" : "1"
                                }
                            ]
                        }
                    ],
                    "dataset" : [
                        {
                            "showvalues" : "0",
                            "data" : [
                                {
                                    "x" : "30",
                                    "y" : "1.3",
                                    "z" : "116",
                                    "name" : "Traders",
                                    "color" : "000080"
                                },
                                {
                                    "x" : "32",
                                    "y" : "3.5",
                                    "z" : "99",
                                    "name" : "Farmers",
                                    "color" : "ff0000"
                                },
                                {
                                    "x" : "10",
                                    "y" : "3.0",
                                    "z" : "49",
                                    "name" : "Farmers",
                                    "color" : "595959"
                                },
                                {
                                    "x" : "8",
                                    "y" : "1.9",
                                    "z" : "33",
                                    "name" : "Individuals",
                                    "color" : "55FFFF"
                                },
                                {
                                    "x" : "65",
                                    "y" : "1.4",
                                    "z" : "48",
                                    "name" : "Corporate Group C",
                                    "color" : "00BF55"
                                },
                                {
                                    "x" : "90",
                                    "y" : "1.0",
                                    "z" : "68",
                                    "name" : "Corporate Group C",
                                    "color" : "FFBF00"
                                },
                                {
                                    "x" : "68",
                                    "y" : "3.7",
                                    "z" : "70",
                                    "name" : "HNW Individuals",
                                    "color" : "FFFF00"
                                },
                                {
                                    "x" : "88",
                                    "y" : "3.0",
                                    "z" : "30",
                                    "name" : "HNW Individuals",
                                    "color" : "FF9FFF"
                                }
                            ]
                        }
                    ]
                })
            );
            
            append(
                xui.create("xui.UI.FusionChartsXT")
                .setHost(host,"xui_ui_fusionchartsxt2")
                .setLeft("6.095238095238095em")
                .setTop("17.523809523809526em")
                .setWidth("30.01904761904762em")
                .setHeight("24.99047619047619em")
                .setChartType("Scatter")
                .setJSONData({
                    "chart" : {
                        "caption" : "Income Expenditure Analysis",
                        "subcaption" : "(sample survey done among buyers of LCD TV)",
                        "xaxisname" : "Salary",
                        "yaxisname" : "Amount spent on LCD TV",
                        "showregressionline" : "1",
                        "xaxislabelmode" : "auto"
                    },
                    "dataset" : [
                        {
                            "color" : "000000",
                            "data" : [
                                {
                                    "x" : "9200",
                                    "y" : "1600"
                                },
                                {
                                    "x" : "9900",
                                    "y" : "1800"
                                },
                                {
                                    "x" : "9500",
                                    "y" : "1510"
                                },
                                {
                                    "x" : "9700",
                                    "y" : "1400"
                                },
                                {
                                    "x" : "8100",
                                    "y" : "1500"
                                },
                                {
                                    "x" : "8600",
                                    "y" : "1300"
                                },
                                {
                                    "x" : "8300",
                                    "y" : "1220"
                                },
                                {
                                    "x" : "7800",
                                    "y" : "1300"
                                },
                                {
                                    "x" : "7800",
                                    "y" : "1220"
                                },
                                {
                                    "x" : "7000",
                                    "y" : "1210"
                                },
                                {
                                    "x" : "6000",
                                    "y" : "1140"
                                },
                                {
                                    "x" : "6000",
                                    "y" : "1000"
                                },
                                {
                                    "x" : "6200",
                                    "y" : "950"
                                },
                                {
                                    "x" : "5300",
                                    "y" : "940"
                                },
                                {
                                    "x" : "4700",
                                    "y" : "1000"
                                },
                                {
                                    "x" : "4800",
                                    "y" : "947"
                                },
                                {
                                    "x" : "4500",
                                    "y" : "850"
                                },
                                {
                                    "x" : "4000",
                                    "y" : "870"
                                },
                                {
                                    "x" : "3700",
                                    "y" : "800"
                                },
                                {
                                    "x" : "3100",
                                    "y" : "800"
                                },
                                {
                                    "x" : "4500",
                                    "y" : "600"
                                },
                                {
                                    "x" : "4000",
                                    "y" : "660"
                                },
                                {
                                    "x" : "3600",
                                    "y" : "500"
                                },
                                {
                                    "x" : "3400",
                                    "y" : "450"
                                },
                                {
                                    "x" : "3100",
                                    "y" : "650"
                                },
                                {
                                    "x" : "3100",
                                    "y" : "600"
                                },
                                {
                                    "x" : "3100",
                                    "y" : "540"
                                },
                                {
                                    "x" : "2800",
                                    "y" : "460"
                                },
                                {
                                    "x" : "2400",
                                    "y" : "650"
                                },
                                {
                                    "x" : "2300",
                                    "y" : "540"
                                },
                                {
                                    "x" : "3000",
                                    "y" : "340"
                                },
                                {
                                    "x" : "2000",
                                    "y" : "280"
                                },
                                {
                                    "x" : "2200",
                                    "y" : "340"
                                },
                                {
                                    "x" : "2000",
                                    "y" : "180"
                                }
                            ]
                        }
                    ]
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        // To determine how properties affects this module
        propSetAction : function(prop){
        }
    },
    // export
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        },
        $Functions:{
        }
    }
});