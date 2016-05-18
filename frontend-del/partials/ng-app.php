<div
        ng-controller="zakatController"
        class="zk-container"
    >

    <!-- Top Banner -->
    <div class="zk-banner">

        <div class="container">
            <div class="col-md-6 col-md-offset-6">
                <h1>Zakat Giving</h1>
                <p>Powered by <img alt="JustGiving" class="logo" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iNTY2cHgiIGhlaWdodD0iOThweCIgdmlld0JveD0iMCAwIDU2NiA5OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyI+ICAgICAgICA8dGl0bGU+bG9nbzwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPiAgICAgICAgPGcgaWQ9ImxvZ28iIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIGZpbGw9IiNGRkZGRkYiPiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+ICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOTguNSwyLjEgTDE3OC45LDIuMSBMMTc4LjksMTkuMSBMMTcyLjMsMTkuMSBMMTcyLjMsMzYuNSBMMTc4LjksMzYuNSBMMTc4LjksNjAuOSBDMTc4LjksNzMuNCAxODQuOCw3OS42IDE5Nyw3OS42IEMyMDIuMiw3OS42IDIwNi40LDc4LjUgMjEwLjQsNzYuMSBMMjExLjQsNzUuNSBMMjExLjQsNTguNSBMMjA4LjUsNjAuMSBDMjA2LjQsNjEuMyAyMDQuMSw2MS44IDIwMS43LDYxLjggQzE5OS4zLDYxLjggMTk4LjYsNjEgMTk4LjYsNTguNCBMMTk4LjYsMzYuNiBMMjExLjcsMzYuNiBMMjExLjcsMTkuMiBMMTk4LjYsMTkuMiBMMTk4LjYsMi4xIEwxOTguNSwyLjEgWiIgaWQ9IlNoYXBlIj48L3BhdGg+ICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05Niw1MiBDOTYsNTYuMyA5NC42LDYxLjQgODguMSw2MS40IEM4My4xLDYxLjQgODAuNSw1OC4yIDgwLjUsNTIgTDgwLjUsMTkuMSBMNjAuOSwxOS4xIEw2MC45LDU3IEM2MC45LDcwLjkgNjguOSw3OS42IDgxLjcsNzkuNiBDODcuNSw3OS42IDkyLjQsNzcuNSA5Ni43LDczLjIgTDEwMi4xLDc4LjYgTDExNS43LDc4LjYgTDExNS43LDE5LjEgTDk2LDE5LjEgTDk2LDUyIEw5Niw1MiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1wYXRoIiB4PSIzMDEuOSIgeT0iMTkuMSIgd2lkdGg9IjE5LjciIGhlaWdodD0iNTkuNSI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjY3LjksMzEuOCBMMjUxLjcsNDggTDI3NCw0OCBDMjcxLjEsNTQuNSAyNjQuNiw1OSAyNTcsNTkgQzI0Ni43LDU5IDIzOC4zLDUwLjYgMjM4LjMsNDAuMyBDMjM4LjMsMzAgMjQ2LjYsMjEuNiAyNTcsMjEuNiBDMjYwLjcsMjEuNiAyNjQuMiwyMi43IDI2Ny4xLDI0LjYgTDI4Mi4xLDkuNiBDMjc1LjIsNCAyNjYuNSwwLjYgMjU2LjksMC42IEMyMzUsMC42IDIxNy4yLDE4LjQgMjE3LjIsNDAuMyBDMjE3LjIsNjIuMiAyMzUsODAgMjU2LjksODAgQzI3OC44LDgwIDI5Ni42LDYyLjIgMjk2LjYsNDAuMyBDMjk2LjYsMzcuMyAyOTYuMywzNC41IDI5NS43LDMxLjcgTDI2Ny45LDMxLjcgTDI2Ny45LDMxLjggWiIgaWQ9IlNoYXBlIj48L3BhdGg+ICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtcGF0aCIgeD0iMzAxLjkiIHk9IjIuMSIgd2lkdGg9IjE5LjciIGhlaWdodD0iMTIiPjwvcmVjdD4gICAgICAgICAgICAgICAgPHBhdGggZD0iTTE1MS4xLDQyIEwxNDkuMyw0MS40IEMxNDQuNywzOS45IDE0MC40LDM4LjQgMTQwLjQsMzYuNSBMMTQwLjQsMzYuMyBDMTQwLjQsMzQuNCAxNDIuOCwzMy43IDE0NSwzMy43IEMxNDguMiwzMy43IDE1Mi40LDM1IDE1NywzNy4zIEwxNjguMywyNiBMMTY3LjQsMjUuNCBDMTYxLDIxLjEgMTUyLjgsMTguNSAxNDUuMywxOC41IEMxMzIsMTguNSAxMjMuMSwyNi4zIDEyMy4xLDM4IEwxMjMuMSwzOC4yIEMxMjMuMSw0OS44IDEzMi4yLDU0LjEgMTQxLjEsNTYuNyBDMTQxLjgsNTYuOSAxNDIuNiw1Ny4xIDE0My4zLDU3LjQgQzE0OCw1OC44IDE1Miw2MCAxNTIsNjIuMSBMMTUyLDYyLjMgQzE1Miw2NC43IDE0OSw2NS4yIDE0Ni41LDY1LjIgQzE0MS43LDY1LjIgMTM2LjEsNjMuMiAxMzAuNyw1OS42IEwxMTkuOSw3MC40IEwxMTkuNyw3MC42IEwxMjAuNyw3MS40IEMxMjgsNzcuMiAxMzcsODAuMyAxNDYuMSw4MC4zIEMxNjAuNiw4MC4zIDE2OS4zLDcyLjkgMTY5LjMsNjAuNSBMMTY5LjMsNjAuMyBDMTY5LjMsNDggMTU3LjQsNDQuMSAxNTEuMSw0MiIgaWQ9IlNoYXBlIj48L3BhdGg+ICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNCw1MC44IEMzNCw1Ny43IDMxLjUsNjAuOSAyNi4yLDYwLjkgQzIyLjEsNjAuOSAxOC42LDU4LjkgMTQuNCw1NC4zIEwxMy42LDUzLjUgTDAuMyw2Ni44IEwxLjQsNjguMSBDNy45LDc1LjggMTYuNCw3OS43IDI2LjYsNzkuNyBDNDQuMiw3OS43IDU0LjMsNjkuNSA1NC4zLDUxLjYgTDU0LjMsMi4yIEwzNCwyLjIgTDM0LDUwLjggTDM0LDUwLjggWiIgaWQ9IlNoYXBlIj48L3BhdGg+ICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01MjEuOSwyNC4xIEM1MTcuMiwyMCA1MTEuOSwxOCA1MDUuMywxOCBDNDkyLDE4IDQ3OC41LDI3LjYgNDc4LjUsNDYuMSBMNDc4LjUsNDYuMyBDNDc4LjUsNjQuOCA0OTIsNzQuNCA1MDUuMyw3NC40IEM1MTEuNiw3NC40IDUxNi42LDcyLjYgNTIxLjEsNjguNyBDNTIwLjMsNzUuNyA1MTYsODAuNCA1MDcuNiw4MC40IEM1MDIuNSw4MC40IDQ5OC4xLDc5LjUgNDkzLjUsNzcuNCBMNDgwLjcsOTAuMiBMNDgyLjUsOTEuMiBDNDkwLDk1LjIgNDk4LjgsOTcuMyA1MDguMSw5Ny4zIEM1MzAuNyw5Ny4zIDU0MS4zLDg1LjggNTQxLjMsNjQuMyBMNTQxLjMsMTkuMSBMNTI3LDE5LjEgTDUyMS45LDI0LjEgTDUyMS45LDI0LjEgWiBNNTIyLjUsNDYuNCBDNTIyLjUsNTMuMyA1MTcuMiw1OC4yIDUwOS45LDU4LjIgQzUwMi41LDU4LjIgNDk3LjQsNTMuMyA0OTcuNCw0Ni40IEw0OTcuNCw0Ni4yIEM0OTcuNCwzOS4zIDUwMi43LDM0LjQgNTA5LjksMzQuNCBDNTE3LjIsMzQuNCA1MjIuNSwzOS40IDUyMi41LDQ2LjIgTDUyMi41LDQ2LjQgTDUyMi41LDQ2LjQgWiIgaWQ9IlNoYXBlIj48L3BhdGg+ICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01NDUuMiwyMS44IEw1NDgsMjEuOCBMNTQ4LDI4LjYgTDU1MS4yLDI4LjYgTDU1MS4yLDIxLjggTDU1NCwyMS44IEw1NTQsMTkuMSBMNTQ1LjIsMTkuMSBMNTQ1LjIsMjEuOCBaIiBpZD0iU2hhcGUiPjwvcGF0aD4gICAgICAgICAgICAgICAgPHBhdGggZD0iTTU2Mi4zLDE5LjEgTDU2MC4zLDIyLjQgTDU1OC4zLDE5LjEgTDU1NSwxOS4xIEw1NTUsMjguNiBMNTU4LjEsMjguNiBMNTU4LjEsMjMuOSBMNTU5LjUsMjYuMSBMNTYxLjEsMjYuMSBMNTYyLjUsMjMuOSBMNTYyLjUsMjguNiBMNTY1LjcsMjguNiBMNTY1LjcsMTkuMSBMNTYyLjMsMTkuMSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1wYXRoIiB4PSIzOTIuOSIgeT0iMTkuMSIgd2lkdGg9IjE5LjYiIGhlaWdodD0iNTkuNSI+PC9yZWN0PiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzU3LjUsNTIuMiBMMzQ2LjQsMTkuMSBMMzI1LjUsMTkuMSBMMzQ4LjcsNzguNiBMMzQ4LjksNzkgTDM2NS44LDc5IEwzODkuMiwxOS4xIEwzNjguNiwxOS4xIEwzNTcuNSw1Mi4yIFoiIGlkPSJTaGFwZSI+PC9wYXRoPiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDUyLjcsMTggQzQ0Ni45LDE4IDQ0MiwyMC4xIDQzNy43LDI0LjQgTDQzMi4zLDE5IEw0MTguNywxOSBMNDE4LjcsNzguNSBMNDM4LjMsNzguNSBMNDM4LjMsNDUuNSBDNDM4LjMsNDEuMiA0MzkuNywzNi4xIDQ0Ni4yLDM2LjEgQzQ1MS4yLDM2LjEgNDUzLjgsMzkuMiA0NTMuOCw0NS41IEw0NTMuOCw3OC41IEw0NzMuNSw3OC41IEw0NzMuNSw0MC42IEM0NzMuNSwyNi43IDQ2NS41LDE4IDQ1Mi43LDE4IiBpZD0iU2hhcGUiPjwvcGF0aD4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1wYXRoIiB4PSIzOTIuOSIgeT0iMi4xIiB3aWR0aD0iMTkuNiIgaGVpZ2h0PSIxMiI+PC9yZWN0PiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg=="> </p>
            </div>
        </div>

    </div> <!-- End Top Banner -->
    


    <!-- Zakat Intro -->
    <div class="zk-intro">
        <div class="container">

            
            <div class="col-md-12">
                
                <h2>
                    Calculate your Zakat giving in minutes<br>
                    and find an appropriate cause to give to
                </h2>

            </div>


            <div class="col-md-12 hidden-xs">
                <div class="zk-illustration">
                    <img src="img/steps-dt.png">
                </div>
            </div>

            <div class="row zk-steps">

                <!-- Step 1 -->
                <div class="col-sm-4 zk-step-1">
                    <p>Calculate the correct<br>amount for you</p>
                </div>

                <!-- Step 2 -->
                <div class="col-sm-4 zk-step-2">
                    <p>Find a cause that<br>inspires you</p>
                </div>

                <!-- Step 3 -->
                <div class="col-sm-4 zk-step-3">
                    <p>Donate securely in seconds<br>and see your impact</p>
                </div>

            </div>


            <!-- Call to action -->
            <div class="row zk-cta zk-cta-get-started">
                <a 
                    class="btn btn-primary" 
                    ng-click="getStarted()"
                >Get Started</a>
            </div>

            <!-- Find out more -->
            <div class="row zk-find-out-more">
                <div class="col-md-12">
                    <p>
                        Questions? 
                        <a 
                            target="_blank"
                            href="https://help.justgiving.com/hc/en-us/articles/207804259"
                        >
                            Find out more about Zakat on Justgiving
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div> <!-- End: Zakat Intro -->


    <!-- Nisab Loading -->
    <div 
        class="container zk-loading" 
        ng-show=" ui_stage == 'loading' ">
        <p>Loading Nisab values...</p>
    </div> <!-- End Nisab Loading -->


    

    <!-- Stage 1: Calculation Stage-->
    <div 
        class="zk-stage-1"
        ng-show=" ui_stage == 'form' "
    >

        <div class="container">
            
            <div class="row stage-heading">
                <div class="col-sm-1 col-xs-2">
                    <span class="zk-heading-border-indent"><div class="inner"></div></span>
                    <span class="zk-heading-circle"><div class="inner">1</div></span>

                </div>
                <div class="col-sm-11 col-xs-10">
                    <h3>Calculate Your Zakat</h3>
                </div>

            </div>
            
            
            <div class="row">

                <!-- Zakat Form -->

                <div class="col-md-5 col-md-offset-1 zk-form">

                <!-- Currency -->


                    <div class="form-group">
                        <label for="currency">Select Your Currency</label>
                        
                        <div class="input-group">

                            <div 
                                class="input-group-addon" 
                                ng-bind-html="selectedCurrency.symbol">
                            </div>

                            <select 
                                id="currency"
                                class="form-control" 
                                ng-model="selectedCurrency"
                                ng-options="currency.name for currency in nisab.currencies track by currency.name"
                            ></select>

                        </div>
                    </div>


                    
                    <!-- Value of Gold you possess -->
                    <div class="form-group">
                        <label 
                            class="control-label 
                            " for="value_au">
                            Value of Gold you possess
                        </label>
                        <div class="input-group">
                            <div class="input-group-addon" ng-bind-html="selectedCurrency.symbol"></div>
                            <input
                                select-on-click
                                ng-change="updateZakatCalculated()" 
                                type="number"
                                min="0" 
                                class="form-control"
                                id="value_au"
                                ng-model="formData.value_au"> 
                        </div>
                    </div>

                    <!-- Value of Gold &amp; Silver you possess -->
                    <div class="form-group">
                        <label 
                            class="control-label 
                            " for="value_ag">
                            Value of Silver you possess
                        </label>
                        <div class="input-group">
                            <div class="input-group-addon" ng-bind-html="selectedCurrency.symbol"></div>
                            <input
                                select-on-click
                                ng-change="updateZakatCalculated()" 
                                type="number"
                                min="0" 
                                class="form-control"
                                id="value_ag"
                                ng-model="formData.value_ag"> 
                        </div>
                    </div>


                    <!-- Cash at Home & Bank Accounts -->
                    <div class="form-group">
                        <label 
                            class="control-label" for="cash">
                            Cash at Home &amp; Bank Accounts
                        </label>

                        
                        <div class="input-group">
                            <div class="input-group-addon" ng-bind-html="selectedCurrency.symbol"></div>
                              <input
                                ng-change="updateZakatCalculated()" 
                                type="number"
                                min="0" 
                                class="form-control"
                                id="cash"
                                ng-model="formData.cash">
                            </div>
                      </div>



            <!-- Other Savings -->




                    <div class="form-group">
                        <label 
                            class="control-label" for="other-savings">
                            Other Savings
                        </label>

                        
                        <div class="input-group">
                            <div class="input-group-addon" ng-bind-html="selectedCurrency.symbol"></div>
                              <input
                                ng-change="updateZakatCalculated()" 
                                type="number"
                                min="0" 
                                class="form-control"
                                id="other-savings"
                                ng-model="formData.otherSavings">
                          </div>
                      </div>






            <!-- Investment & Share Values -->




                    <div class="form-group">
                        <label 
                            class="control-label" for="investment">
                            Investment &amp; Share Values
                        </label>

                        
                        <div class="input-group">
                            <div class="input-group-addon" ng-bind-html="selectedCurrency.symbol"></div>
                              <input
                                ng-change="updateZakatCalculated()" 
                                type="number"
                                min="0" 
                                class="form-control"
                                id="investment"
                                ng-model="formData.investment">
                          </div>
                      </div>






            <!-- Money owed to you -->




                    <div class="form-group">
                        <label 
                            class="control-label" for="owed-in">
                            Money owed to you
                        </label>

                        
                        <div class="input-group">
                            <div class="input-group-addon" ng-bind-html="selectedCurrency.symbol"></div>
                              <input
                                ng-change="updateZakatCalculated()" 
                                type="number"
                                min="0" 
                                class="form-control"
                                id="owed-in"
                                ng-model="formData.owedIn"
                                >
                            </div>
                      </div>






            <!-- Stock Value -->




                    <div class="form-group">
                        <label 
                            class="control-label" for="stock-value">
                            Stock Value
                        </label>

                        
                        <div class="input-group">
                            <div class="input-group-addon" ng-bind-html="selectedCurrency.symbol"></div>
                          <input
                            ng-change="updateZakatCalculated()" 
                            type="number"
                            min="0" 
                            class="form-control"
                            id="stock-value"
                            ng-model="formData.stockValue">
                        </div>
                      </div>






            <!-- Money You Owe -->


                    <div class="form-group">
                        <label 
                            class="control-label" for="owed-out">
                            Money You Owe
                        </label>

                        
                        <div class="input-group">
                            <div class="input-group-addon" ng-bind-html="selectedCurrency.symbol"></div>
                          <input
                            ng-change="updateZakatCalculated()" 
                            type="number"
                            min="0" 
                            class="form-control"
                            id="owed-out"
                            ng-model="formData.owedOut"
                            >
                        </div>
                      </div>


            <!-- Other Outgoings Due -->




                    <div class="form-group">
                        <label 
                            class="control-label" for="other-outgoings-due">
                            Other Outgoings Due
                        </label>

                        
                        <div class="input-group">
                            <div class="input-group-addon" ng-bind-html="selectedCurrency.symbol"></div>
                          <input
                            ng-change="updateZakatCalculated()" 
                            type="number"
                            min="0" 
                            class="form-control"
                            id="other-outgoings-due"
                            ng-model="formData.otherOutgoingsDue">
                          
                        </div>
                      </div>






            <!-- Net Assets -->

                    <div class="form-group">
                        <label 
                            class="control-label" for="net-assets">
                            Net Assets
                        </label>

                        
                        <div class="input-group">
                            <div class="input-group-addon" ng-bind-html="selectedCurrency.symbol"></div>
                          <input
                            ng-change="updateZakatCalculated()" 
                            type="number"
                            min="0" 
                            readonly="readonly"
                            class="form-control"
                            ng-model="formData.netAssets" 
                            id="net-assets">
                        </div>
                    </div>


            <!-- Base Nisab value on  -->

                    <div class="form-group">
                        <label 
                            class="control-label" for="base-nisab">
                            Base Nisab value on
                        </label>



                        <div class="input-group">

                            <div 
                                class="input-group-addon">
                                &nbsp;
                            </div>

                            <select 
                                id="base-nisab"
                                class="form-control" 
                                ng-model="selectedNisabBase"
                                ng-change="updateZakatCalculated()" 
                            >
                                <option 
                                    value="silver"
                                    >
                                    Silver
                                </option>

                                <option 
                                    value="gold"
                                >
                                    Gold
                                </option>

                            </select>
                        </div>

                    </div>


            <!-- Calculate CTA -->

                    <button
                        class="btn btn-primary"
                        ng-click="useZakatCalculated()"
                        ng-disabled=" (formData.zakatCalculated <= 0) "
                    >
                        Calculate your Zakat
                    </button>


                </div> <!-- End Zakat Form -->


                <!-- Zakat Threshold Values -->
                <div class="col-md-offset-2 col-md-4">

                    <div class="zk-nisab-thresholds">
                        <h3>Current Values</h3>
                        <dl>
                            <dt>Silver Nisab</dt>
                            <dd class='zk-nisab-threshold-gold'>
                                <span 
                                    class="zk-currency-symbol" 
                                    ng-bind-html="selectedCurrency.symbol">
                                </span>
                                <span class="zk-nisab-threshold">
                                    {{selectedCurrency.threshold_ag | currency : ''}}
                                    (for 87.5g)
                                </span>
                            </dd>

                            <dt>Gold Nisab</dt>
                            <dd class='zk-nisab-threshold-silver'>
                                <span 
                                    class="zk-currency-symbol"
                                    ng-bind-html="selectedCurrency.symbol"
                                >
                                    
                                </span>
                                <span class="zk-nisab-threshold">
                                    {{selectedCurrency.threshold_au | currency : ''}}
                                    (for 625g)
                                </span>
                            </dd>
                        </dl>
                    </div> <!-- End .zk-nisab-thresholds -->

                </div>
            </div>
        </div> <!-- End Container -->


        <!-- Zakat Override -->
        <div class="container zk-calculation-override">


            <div class="row">
                <div class="col-md-11 col-md-offset-1">
                    <h3>
                        I already know the amount I want to give
                    </h3>
                </div>
            </div>

            <div class="row">
                <div class="col-md-5 col-md-offset-1">

                    <div class="form-group">

                        


                        <label 
                            class="control-label" for="zakat-override">
                            Zakat Amount
                        </label>

                        <div class="input-group">
                            <div class="input-group-addon" ng-bind-html="selectedCurrency.symbol"></div>
                            <input 
                                type="number" 
                                format="currency"
                                class="form-control"
                                ng-model="formData.zakatOverride"
                                id="zakat-override">
                        </div>

                        <!-- Calculation Override CTA -->

                        <button 
                            class="btn btn-primary" 
                            ng-click="useZakatOverride()"
                            ng-disabled=" (formData.zakatOverride <= 0) "
                            >
                            Continue
                        </button>

                                
                    </div>

                </div>
            </div>

        </div>




        <!-- Suggested Charities (Stage 1) -->
        <div class="suggested-charities-stage-1">

            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <h2>Suggested Zakat Charities</h2>
                        <p>Here are some charities you can support with your Zakat Giving</p>
                    </div>
                </div>

                <div class="row zk-suggested-charities">
                    <div class="col-md-4">
                        <div class="zk-suggested-charity">
                            <div class="zk-inner">
                                <img src="img/stock/charity-logo.jpg" class="zk-logo">
                                <a class="zk-charity-name">
                                    Charity Name
                                </a>
                                <p class="zk-charity-desc">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                </p>
                                <p class="zk-charity-reg">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 hidden-xs">
                        <div class="zk-suggested-charity">
                            <div class="zk-inner">
                                <img src="img/stock/charity-logo.jpg" class="zk-logo">
                                <a class="zk-charity-name">
                                    Charity Name
                                </a>
                                <p class="zk-charity-desc">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                </p>
                                <p class="zk-charity-reg">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 hidden-xs">
                        <div class="zk-suggested-charity">
                            <div class="zk-inner">
                                <img src="img/stock/charity-logo.jpg" class="zk-logo">
                                <a class="zk-charity-name">
                                    Charity Name
                                </a>
                                <p class="zk-charity-desc">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                </p>
                                <p class="zk-charity-reg">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!-- End Suggested Charities (Stage 1) -->




    </div> <!-- End Stage 1: Calculate -->

    <!-- Stage 2: Select Charity -->

    <div 
        class="zk-stage-2"
        ng-show=" ui_stage == 'search' "
    >

        
        <!-- Stage 1 Summary, shown at Stage 2 -->
        <div class="zk-stage-1-summary">
            <div class="container">
                <div class="row">
                    <div class="col-sm-1 col-xs-2">
                        <span class="zk-heading-circle"><div class="inner">1</div></span>
                    </div>
                    <div class="col-sm-6 col-xs-10">
                        <p>
                            Your Zakat value is:
                            <span class="zakat-due">
                                <span ng-bind-html="selectedCurrency.symbol"></span>{{formData.zakatDue | currency : ''}}
                            </span>
                        </p>
                    </div>

                    <div class="col-sm-5 col-xs-12 zk-recalculate">
                        <p>
                            <a 
                                ng-click="recalculate()"
                                class="btn btn-default"
                                >
                                Recalculate your Zakat
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main part of Stage 2 -->
        <div class="container">
            <div class="row stage-heading">
                <div class="col-sm-1 col-xs-2">
                    <span class="zk-heading-border-indent"><div class="inner"></div></span>
                    <span class="zk-heading-circle"><div class="inner">2</div></span>
                </div>
                <div class="col-sm-11 col-xs-10">
                    <h3>Select one of the suggested charities or search for a cause</h3>
                </div>
            </div>


            <!-- Suggested Charities -->
            <div class="row zk-suggested-charities">
                <div 
                    class="col-md-4"
                    >
                    <div class="zk-suggested-charity">
                        <div class="zk-inner">
                            <img src="img/stock/charity-logo.jpg" class="zk-logo">
                            <a class="zk-charity-name">
                                Charity Name
                            </a>
                            <p class="zk-charity-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                            <p class="zk-charity-reg">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            </p>
                            <a class="btn zk-cta" href="http://www.justgiving.com">Donate</a>
                        </div>
                    </div>
                </div>

                <div 
                    class="col-md-4"
                    >
                    <div class="zk-suggested-charity">
                        <div class="zk-inner">
                            <img src="img/stock/charity-logo.jpg" class="zk-logo">
                            <a class="zk-charity-name">
                                Charity Name
                            </a>
                            <p class="zk-charity-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                            <p class="zk-charity-reg">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                            </p>
                            <a class="btn zk-cta" href="http://www.justgiving.com">Donate</a>
                        </div>
                    </div>
                </div>

                <div 
                    class="col-md-4"
                    >
                    <div class="zk-suggested-charity">
                        <div class="zk-inner">
                            <img src="img/stock/charity-logo.jpg" class="zk-logo">
                            <a class="zk-charity-name">
                                Charity Name
                            </a>
                            <p class="zk-charity-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                            <p class="zk-charity-reg">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                            <a class="btn zk-cta" href="http://www.justgiving.com">Donate</a>
                        </div>
                    </div>
                </div>
            </div> <!-- End: Suggested Charities -->

            <!-- Search Form -->
            <div class="row zk-charity-search-form">
                
                <div class="col-md-8 col-md-offset-2">

                    <h3>Search for your cause</h3>

                    <div class="input-group">
                        <input 
                            class="form-control"
                            charity-search 
                            ng-model="charityQuery"
                            ng-change="searchCharities()"
                            type="text" 
                            placeholder="What would you like to give your Zakat to?"
                        >


                            <div class="input-group-btn">

                                <a 
                                    class="btn btn-default" 
                                    ng-click="searchCharities()"
                                >Search</a>
                            </div>
                        </div>

                </div>
            </div> <!-- End: Search Form -->

            <!-- Search Results -->
            <div class="row zd-charity-search-results">
                <div class="col-md-8 col-md-offset-2">

                    <div class="zk-charity-list">

                        <table>
                            <tr ng-repeat=" charity in charitySearchResults ">

                                <td class="zk-charity-logo">
                                    <div class="zk-inner">
                                        <a 
                                            ng-href="{{ charity.SDIurl }}" 
                                            role="button"
                                            >
                                            <img ng-src="{{ charity.logoUrl }}?template=size100x100" width="64">
                                        </a>
                                    </div>
                                </td>

                                <td class="zk-charity-name">
                                    
                                    <a 
                                        ng-href="{{ charity.SDIurl }}" 
                                        role="button"
                                        >
                                        {{ charity.name }}
                                    </a>

                                </td>


                            </tr>


                        </table> <!-- End .zk-charity-list -->
                    </div>
                 </div>
            </div> <!-- End Container -->
         </div> <!-- End: Search Results -->

    </div>

</div> <!-- End ng-controller -->