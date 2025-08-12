var bdhr = {
    generateListing: function (options) {
        if (options == null ) {
            return;
        }
        if (!options.constructor === Array) {
            return;
        }
        if ((options.CCPCode == null || options.CCPCode == "") && (options.InAccountID == null || options.InAccountID == "")) {
            return;
        }
        if (options.ElementID == null || options.ElementID == "") {
            return;
        }
        if (!bdhr.clientDisplayOptions) {
            bdhr.clientDisplayOptions = {};
        }
        bdhr.clientDisplayOptions[options.ElementID] = options;

        var getJobsScript = document.createElement('script');
        getJobsScript.src = ((options.ServerUrl) ? options.ServerUrl : "https://jobs.ourcareerpages.com")
            + "/WebServices/ccp_jobs.aspx?AutoGenerate=yes&GroupBy="
            + ((options.GroupJobsBy == null) ? "" : options.GroupJobsBy.replace(" ", "%20"))
            + "&CCPCode="
            + ((options.CCPCode == null) ? "" : options.CCPCode)
            + "&InAccountID="
            + ((options.InAccountID == null) ? 0 : options.InAccountID)
            + "&ElementID="
            + options.ElementID
            + "&JobOrderBy="
            + ((options.JobListOrderBy == null) ? "" : options.JobListOrderBy.replace(" ", "%20"))
            + ((options.JobListOrderThenBy == null) ? "" : "," + options.JobListOrderThenBy.replace(" ", "%20"));

        document.head.appendChild(getJobsScript);
        // When this javascript link is added to the page, the browser will send a request to the server URL and when 
        // the server process completes, it will send some javascript back to the browser similiar to the following.
        //   .....
        //   window.bdhrdata.udi_0001111.ccpInfo = { ...... };
        //   bdhr.buildListing("elementID", "0001111");
        //   which will call the function below to generate the page dom elements.
    },
    buildListing: function (jobsDomElementID, uniqueDataID) {

        var defaultOptions = {
            ElementID: { defaultValue: ''}
            , CCPCode: { defaultValue: '' }
            , InAccountID: { defaultValue: 0}
            , ReturnUrl: { defaultValue: '' }
            , HomePageUrl: { defaultValue: '' }
            , ShowConfirmationWidget: { defaultValue: false }
            , ShowAddThisWidget: { defaultValue: true }
            , ShowEmailSignup: { defaultValue: true }
            , ShowCompanyName: { defaultValue: false }
            , ShowCustomContent: { defaultValue: false }
            , OpenLinkInNewWindow: { defaultValue: false }
            , Heading: { defaultValue: 'Company Job Listings' }
            , CategoryHeaderPrefix: { defaultValue: null }
            , CategoryHeaderSuffix: { defaultValue: null }
            , GroupJobsBy: { defaultValue: 'label' }
            , JobListOrderBy: { defaultValue: 'id desc' }
            , JobListOrderThenBy: { defaultValue: '' }
            , ServerUrl: { defaultValue: '' }
            , EmailSignUpElementID: { defaultValue: '' }
            , AddThisElementID: { defaultValue: '' }
            , CustomContentElementID: { defaultValue: '' }
            , CustomContent: { defaultValue: '' }
            , JobLinkSource: { defaultValue: null }
            , ShowJobFeedInJobLink: { defaultValue: true }
      }


        var ccpData = {};
        var dbCcpData = window.bdhrdata["udi_" + uniqueDataID].ccpInfo;
        var clientDisplayOptions = bdhr.clientDisplayOptions[jobsDomElementID];
        ccpData.CategoryList = [];
        if (dbCcpData.CategoryList) {
            ccpData.CategoryList = dbCcpData.CategoryList;
        }


        var property;
        for (property in defaultOptions) {
            ccpData[property] = (clientDisplayOptions[property] == null) 
                                     ? ((dbCcpData[property] == null) 
                                            ? defaultOptions[property].defaultValue
                                            : dbCcpData[property]
                                       ) 
                                     : clientDisplayOptions[property];
        }


        var mainElem = document.getElementById(jobsDomElementID);
        if (mainElem == null) {
            return;
        }
        mainElem.innerHTML = "";
        if (ccpData.ShowCustomContent) {
            //put custom content generation here
            var anElem = document.createElement("div");
            anElem.innerHTML = ccpData.CustomContent;
            var ccParentElem = mainElem;
            if (ccpData.CustomContentElementID) {
                var tmpElem = document.getElementById(ccpData.CustomContentElementID);
                if (tmpElem) {
                    ccParentElem = tmpElem;
                }
            }
            ccParentElem.appendChild(anElem);
        }

        if (ccpData.Heading) {
            var anHdgElem = document.createElement("div");
            anHdgElem.className = "jobListingHeadingSection";
            anHdgElem.innerHTML = "<br /><span class=\"activeJobHeading \">" + ccpData.Heading + "</span>";
            mainElem.appendChild(anHdgElem);
        }

        if (ccpData.CategoryList.length === 0) {
            var noResultsFound = document.createElement("div");
            noResultsFound.innerHTML = "No results found";
            mainElem.appendChild(noResultsFound);
        }
        for (var i = 0; i < ccpData.CategoryList.length; i++) {
            var curCat = ccpData.CategoryList[i];
            var aCatElem = document.createElement("div");
            aCatElem.className = "categorySection";
            var catHeading = "";
            if (curCat.ShowCategoryHeading) {
                catHeading = curCat.Heading;
                if (ccpData.CategoryHeaderPrefix) {
                    catHeading = ccpData.CategoryHeaderPrefix + " " + catHeading;
                } else {
                    catHeading = curCat.HeadingPrefix + " " + catHeading;
                };
                if (ccpData.CategoryHeaderSuffix) {
                    catHeading = catHeading + " " + ccpData.CategoryHeaderSuffix;
                } else {
                    catHeading = catHeading + " " + curCat.HeadingSuffix;
                };

            }
            aCatElem.innerHTML = "<div class=\"categoryHeadingSection\" >" + catHeading + "</div>";
            for (var ji = 0; ji < curCat.JobList.length; ji++) {
                var curJob = curCat.JobList[ji];
                var listableJob = true;
                if (clientDisplayOptions.CurrentJobNumber && clientDisplayOptions.CurrentJobNumber.toString() == curJob.ID.toString()) {
                    listableJob = false;
                }
                if (listableJob) {
                    var aJobElem = document.createElement("div");
                    aJobElem.className = "jobSection";
                    
                    var tmpUrl = ccpData.ServerUrl + "/job/" + curJob.ID + "?source=" + ((ccpData.JobLinkSource == null || ccpData.JobLinkSource == "") ? ccpData.CCPCode : ccpData.JobLinkSource);
        
                    if (ccpData.ShowJobFeedInJobLink) {
                        tmpUrl += "&jobFeedCode=" + ccpData.CCPCode;
                    }
                    if (ccpData.ReturnUrl && ccpData.ReturnUrl != "") {
                        tmpUrl += "&returnURL=" + ccpData.ReturnUrl;
                    } else if (ccpData.HomePageUrl && ccpData.HomePageUrl != "") {
                        tmpUrl += "&returnURL=" + ccpData.HomePageUrl;
                    }
                    aJobElem.innerHTML = "<span class=\"jobLinkContainer\"><a " + (ccpData.OpenLinkInNewWindow ? "target=\"_blank\"" : "") + " class=\"jobLink\" href=\"" + tmpUrl + "\"><span class=\"jobLinkText\">" + curJob.JobTitle + "</span></a></span> <span class=\"separatorDash\">-</span> " + curJob.Location + (ccpData.ShowCompanyName ? "<span class=\"jobLocation\"><span class=\"separatorDash\"> - (</span><span class=\"companyName\">" + curJob.CompanyName + ")</span><br />" : "");
                    if (ccpData.ShowConfirmationWidget) {
                        if (aJobElem.addEventListener) {
                            aJobElem.addEventListener("click", function(e) {
                                if (!bdhr.processConfirmationAgreement(aJobElem, ccpData)) {
                                    e.preventDefault();
                                }
                            }, false);
                        } else {
                            aJobElem.attachEvent("click", function(e) {
                                if (!bdhr.processConfirmationAgreement(aJobElem, ccpData)) {
                                    e.preventDefault();
                                }
                            });
                        }

                    }
                    aCatElem.appendChild(aJobElem);
                }
        }

            mainElem.appendChild(aCatElem);
        }

        if (ccpData.ShowEmailSignup) {
            var anElem = document.createElement("div");
            anElem.id = "commondivjobalert";
            var emailSignUpHtml = '<hr /><span class="boldedText">Receive notifications of future career opportunities.</span>';
            emailSignUpHtml += '<br><span>Enter your email address:</span><br><input type="text" name="bdh_common_email_address" id="bdh_common_email_address"><input type="button" value="Sign Up Now" id="bdh_common_sign_up2"><hr />';
            anElem.innerHTML = emailSignUpHtml;
            var emailParentElem = mainElem;
            if (ccpData.EmailSignUpElementID) {
                var tmpElem = document.getElementById(ccpData.EmailSignUpElementID);
                if (tmpElem) {
                    emailParentElem = tmpElem;
                }
            }
            emailParentElem.appendChild(anElem);
            if (emailParentElem.querySelector("#bdh_common_sign_up2").addEventListener) {
                emailParentElem.querySelector("#bdh_common_sign_up2").addEventListener("click", function () {
                    bdhr.processEmailButtonClick(emailParentElem, ccpData);
                }, true);
            } else {
                emailParentElem.querySelector("#bdh_common_sign_up2").attachEvent("click", function () {
                    bdhr.processEmailButtonClick(emailParentElem, ccpData);
                });
            }
        }

        if (ccpData.ShowAddThisWidget) {
            var anSTElem = document.createElement("div");
            anSTElem.className = "addthis_toolbox addthis_default_style addthis_32x32_style newaddthis";
            anSTElem.innerHTML = "<a class=\"addthis_button_preferred_1\"></a><a class=\"addthis_button_preferred_2\"></a><a class=\"addthis_button_linkedin\"></a><a class=\"addthis_button_preferred_3\"></a><a class=\"addthis_button_compact\"></a><a class=\"addthis_counter addthis_bubble_style\"></a>";
            var stParentElem = mainElem;
            if (ccpData.AddThisElementID) {
                var tmpElem = document.getElementById(ccpData.AddThisElementID);
                if (tmpElem) {
                    stParentElem = tmpElem;
                }
            }
            stParentElem.appendChild(anSTElem);

            var script = document.createElement('script');
            script.src = "//s7.addthis.com/js/250/addthis_widget.js#pubid=xa-502571e963ff51be";
            stParentElem.appendChild(script);
        }

    },
    processConfirmationAgreement: function (jobElem, ccpData) {
        return confirm("You are leaving this page.  Please click ok to move forward");
    },
    procesEmailMessageReturn: function (messageData, callbackName) {
        if (messageData.status) {
            alert(messageData.message);
        } else {
            alert("there was an error, please try again at a later time");
        }

        try {
            delete window[callbackName];
        }
        catch (e) {
            window[callbackName] = undefined;
        }
    },
    processEmailButtonClick: function (emaiWidgetElem, ccpData) {
        var emailAddress = emaiWidgetElem.querySelector("#bdh_common_email_address").value;
        //removed the hardcoded domain names from the regular expression (|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum|co)
        if (!emailAddress.match(/^[a-z0-9,!#\$%&'\*\+/=\?\^_`\{\|}~-]+(\.[a-z0-9,!#\$%&'\*\+/=\?\^_`\{\|}~-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*\.([a-z]{2,})$/i)) {
            alert("Please enter a valid email address");
            emaiWidgetElem.querySelector("#bdh_common_email_address").focus();
            return;
        }
        var callbackName = "bdh_callback_" + new Date().getTime() + Math.floor(Math.random() * 10000);
        window[callbackName] = function (messageData) {
            bdhr.procesEmailMessageReturn(messageData, callbackName);
        }

        var query = "&callback=" + callbackName;
        query = query + "&email=" + emailAddress;
        query = query + "&company_code=" + ccpData.CCPCode;
        query = query + "&InAccountID=" + ccpData.InAccountID;


        var script = document.createElement('script');
        script.src = ccpData.ServerUrl + "/Resources/js/email_subscribe.aspx?a=" + Math.random() + query;
        document.head.appendChild(script);
    }

}

