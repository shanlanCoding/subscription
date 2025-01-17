import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'info.muge.appshare',
  name: 'AppShare',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[id$="tt_splash_skip_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12683145',
            'https://i.gkd.li/import/12683173',
            'https://i.gkd.li/import/13702708',
          ],
        },
        {
          key: 1,
          quickFind: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/12683168',
            'https://i.gkd.li/import/12683211',
            'https://i.gkd.li/import/12748893',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: 'info.muge.appshare.view.app.detail.AppDetailActivity',
          matches:
            '[id="info.muge.appshare:id/adContainer"] >n FrameLayout > ImageView - FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/import/13761259',
            'https://i.gkd.li/import/13712716',
          ],
        },
      ],
    },
  ],
});
