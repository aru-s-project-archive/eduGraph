from selenium import webdriver
import wget
from time import sleep
import os

chromeOptions = webdriver.ChromeOptions()
prefs = {"download.default_directory" : "/Users/abhinav/Desktop/eduGraph/scraping/courses",  "download.prompt_for_download": False,
    "download.directory_upgrade": True,"plugins.always_open_pdf_externally": True}
chromeOptions.add_experimental_option("prefs",prefs)



driver = webdriver.Chrome("./chromedriver", chrome_options=chromeOptions)

# url = "https://ts.ntu.edu.sg/sites/lib-repository/exam-question-papers/_layouts/15/start.aspx#/Shared%20Documents/Forms/AllItems.aspx"
url = "https://ts.ntu.edu.sg/sites/lib-repository/exam-question-papers/_layouts/15/start.aspx#/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2Flib%2Drepository%2Fexam%2Dquestion%2Dpapers%2FShared%20Documents%2FUG%2FSCSE&FolderCTID=0x01200089A3F19178D586459D6420D6B5DEE9B1&View=%7BD9CF6ACB%2D25F3%2D4E50%2DA04B%2D39B850D79436%7D"
driver.get(url)

sleep(10)

# ug_xpath = "/html/body/form/div[12]/div/div[2]/div[2]/div[3]/div[1]/div[2]/div/div/table/tbody/tr/td/table/tbody/tr[2]/td[3]/div/a"
# # ug_xpath = "//*[@id=\"23\"]/a"
# ug_folder = driver.find_element_by_xpath(ug_xpath)

# ug_folder.click() 


# scse_xpath = "/html/body/form/div[12]/div/div[2]/div[2]/div[3]/div[1]/div[2]/div/div/table/tbody/tr/td/table/tbody/tr[16]/td[3]/div/a"
# sleep(3)

# scse_folder = driver.find_element_by_xpath(scse_xpath)

# scse_folder.click()


# sleep(10)
scse_children_links = []

for i in range(4):
    course_body = driver.find_element_by_xpath("/html/body/form/div[12]/div/div[2]/div[2]/div[3]/div[1]/div[2]/div/div/table/tbody/tr/td/table/tbody")
    table_rows = driver.find_elements_by_tag_name("tr")
    for curr_row in table_rows:
        try:
            curr_link = curr_row.find_elements_by_tag_name("td")[2].find_element_by_css_selector('*').find_element_by_css_selector('*')
            link = curr_link.get_attribute("href")
            text = curr_link.get_attribute("innerHTML")
            if(link[:5]=="https" and text!='Welcome'):
                # print(link,text)
                scse_children_links.append((link,text))
        except:
            pass
    if(i!=3):
        button = driver.find_element_by_id("pagingWPQ2next")
        print("length:",len(scse_children_links))
        button.click()
        sleep(2)

print("length:",len(scse_children_links))
print("first element:",scse_children_links[0])

for link, name in scse_children_links:
    driver.get(link)
    try:
        rows = driver.find_element_by_xpath("/html/body/form/div[12]/div/div[2]/div[2]/div[3]/div[1]/div[2]/div/div/table/tbody/tr/td/table/tbody").find_elements_by_tag_name("tr")
        for curr_row in rows:
                curr_link = curr_row.find_elements_by_tag_name("td")[2].find_element_by_css_selector('*').find_element_by_css_selector('*')
                text = curr_link.get_attribute("innerHTML")
                driver.execute_script("arguments[0].setAttribute(\"download\",\"{}\")".format(text),curr_link)
                curr_link.click()
                sleep(0.5)
    except:
        pass
