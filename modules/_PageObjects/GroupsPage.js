import AppPage from '../AppPage';

class GroupsPage extends AppPage {
    get h1() {
        return browser.$('//h1');
    }

    clickGroupName() {
        browser.$('//div[@qa="group-list"]//a').click();
    }

    get linkToGroup() {
        return browser.$('=QA-7');
    }

    get linkToGroupGroup6Test() {
        return $('//a[contains(text(),"GROUP6 TEST")]');
    }

    get quizTabBtn(){
        return $('//a[contains(text(),"Quiz")]');
    }
}

export default new GroupsPage();