import {AbstractSectionService} from './abstract-section-service-ng';
import {AccountRepository} from '../../repository/account-repository';
import {Map, Iterable} from 'immutable';
import {KerberosRepository} from '../../repository/kerberos-repository';
import {ShellRepository} from '../../repository/shell-repository';
import * as _ from 'lodash';
import {ModelEventName} from '../../model-event-name';
import {NtpServerRepository} from '../../repository/ntp-server-repository';
import {SystemRepository} from '../../repository/system-repository';

export class AccountsSectionService extends AbstractSectionService {
    private accountRepository: AccountRepository;
    private kerberosRepository: KerberosRepository;
    private shellRepository: ShellRepository;
    private ntpServerRepository: NtpServerRepository;
    private systemRepository: SystemRepository;

    public readonly DIRECTORY_TYPES_LABELS = AccountRepository.DIRECTORY_TYPES_LABELS;

    private entriesPromise: Promise<any>;
    public entriesTitle: string;

    protected init() {
        this.accountRepository = AccountRepository.getInstance();
        this.kerberosRepository = KerberosRepository.getInstance();
        this.shellRepository = ShellRepository.getInstance();
        this.ntpServerRepository = NtpServerRepository.getInstance();
        this.systemRepository = SystemRepository.getInstance();

        this.eventDispatcherService.addEventListener(ModelEventName.User.listChange, this.handleUsersChange.bind(this));
        this.eventDispatcherService.addEventListener(ModelEventName.Group.listChange, this.handleGroupsChange.bind(this));
        this.eventDispatcherService.addEventListener(ModelEventName.Directory.listChange, this.handleDirectoriesChange.bind(this));
    }

    public saveUser(user: any) {
        return this.accountRepository.saveUser(user);
    }

    public getNextUid() {
        return this.accountRepository.getNextUid();
    }

    public listGroups(): Promise<Array<Object>> {
        return this.accountRepository.listGroups();
    }

    public getDirectoryServiceConfig(): Promise<Object> {
        return this.accountRepository.getDirectoryServiceConfig();
    }

    public getNewKerberosRealm() {
        return this.kerberosRepository.getNewKerberosRealm();
    }

    public getNewKerberosKeytab() {
        return this.kerberosRepository.getNewKerberosKeytab();
    }

    public getKerberosRealmEmptyList() {
        return this.kerberosRepository.getKerberosRealmEmptyList();
    }

    public getKerberosKeytabEmptyList() {
        return this.kerberosRepository.getKerberosKeytabEmptyList();
    }

    public listKerberosRealms() {
        return this.kerberosRepository.listKerberosRealms();
    }

    public saveKerberosRealm(object: Object) {
        return this.kerberosRepository.saveKerberosRealm(object);
    }

    public saveKerberosKeytabWithKeytabStringBase64(kerberosKeytab, keytabStringBase64) {
        return this.kerberosRepository.saveKerberosKeytab(_.assign(kerberosKeytab, {keytab: {'$binary': keytabStringBase64}}));
    }

    public getNewDirectoryForType(type: string) {
        return this.accountRepository.getNewDirectoryForType(type);
    }

    public listNtpServers() {
        return this.ntpServerRepository.listNtpServers();
    }

    public syncNtpNow(ntpServerAddress: string) {
        return this.ntpServerRepository.syncNow(ntpServerAddress);
    }

    public listShells() {
        return this.shellRepository.listShells();
    }

    public getSystemAdvanced() {
        return this.systemRepository.getAdvanced();
    }

    public listDirectories() {
        return this.accountRepository.listDirectories();
    }

    protected loadEntries() {
        let self = this;
        this.entries = [
            [],
            [],
            [],
            []
        ];
        return this.entriesPromise = Promise.all([
            self.accountRepository.getUserEmptyList(),
            self.accountRepository.getGroupEmptyList(),
            self.accountRepository.getAccountSystemEmptyList(),
            self.accountRepository.getNewDirectoryServices()
        ]).spread(function (
            users: Array<any>,
            groups: Array<any>,
            system: Array<any>,
            directoryServices: Array<any>
        ) {
            (users as any)._order = 0;
            (groups as any)._order = 1;
            (system as any)._order = 2;
            (directoryServices as any)._objectType = 'DirectoryServices';
            (directoryServices as any)._order = 3;
            let entries = [
                users,
                groups,
                system,
                directoryServices
            ];
            (entries as any)._objectType = 'AccountCategory';

            return entries;
        });
    }

    protected loadExtraEntries() {
        return void 0;
    }

    protected loadSettings() {
        return void 0;
    }

    protected loadOverview() {
        return void 0;
    }

    public getNextSequenceForStream (streamId) {
        return this.accountRepository.getNextSequenceForStream(streamId);
    }

    private handleUsersChange(state: Map<string, Map<string, any>>) {
        this.updateCategory((this.entries[0] as Array<any>), 'User', (state.valueSeq().filter((x) => !x.get('builtin')) as Iterable.Indexed<Map<string, any>>));
        this.updateCategory((this.entries[2] as Array<any>), 'User', (state.valueSeq().filter((x) => x.get('builtin')) as Iterable.Indexed<Map<string, any>>));
    }

    private handleGroupsChange(state: Map<string, Map<string, any>>) {
        this.updateCategory((this.entries[1] as Array<any>), 'Group', (state.valueSeq().filter((x) => !x.get('builtin')) as Iterable.Indexed<Map<string, any>>));
        this.updateCategory((this.entries[2] as Array<any>), 'Group', (state.valueSeq().filter((x) => x.get('builtin')) as Iterable.Indexed<Map<string, any>>));
    }

    private updateCategory(entries: Array<any>, objectType: string, state: Iterable.Indexed<Map<string, any>>) {
        let self = this,
            ids = state.map((x) => x.get('id'));
        state.forEach(function (user) {
            let entry = self.findObjectWithId(entries, user.get('id'));
            if (entry) {
                Object.assign(entry, user.toJS());
            } else {
                entry = user.toJS();
                (entry as any)._objectType = objectType;
                entries.push(entry)
            }
        });
        for (let i = entries.length - 1; i >= 0; i--) {
            if (entries[i]._objectType === objectType && !ids.includes(entries[i].id)) {
                entries.splice(i, 1);
            }
        }
    }

    private handleDirectoriesChange(directories: Map<string, Map<string, any>>) {

    }
}
