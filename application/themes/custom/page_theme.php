<?php
namespace Application\Theme\Custom;
use Concrete\Core\Area\Layout\Preset\Provider\ThemeProviderInterface;
use Concrete\Core\Page\Theme\Theme;

class PageTheme extends Theme implements ThemeProviderInterface {
    public function registerAssets() {
        // $this->providesAsset('javascript', '*');
        // $this->providesAsset('css', '*');

        // required for GDPR plugin
        // $this->requireAsset('javascript', 'jquery');
    }

    protected $pThemeGridFrameworkHandle = 'bootstrap3';

    public function getThemeName() {
        return t('Theme');
    }

    public function getThemeDescription() {
        return t('A beautiful theme.');
    }

    public function getThemeResponsiveImageMap() {
        return array(
            'large' => '1200px',
            'medium' => '768px',
            'small' => '0'
        );
    }

    public function getThemeBlockClasses() {
        return array(
            'core_area_layout' => array(
                'bg-grey'
            )
        );
    }

    public function getThemeAreaClasses() {
        return array(
            'Main' => array(
                'getthemeareaclasses',
            ),
        );
    }

    public function getThemeEditorClasses() {
        return array(
            array(
                'title' => t('Text Uppercase'),
                'menuClass' => '',
                'spanClass' => 'text-upper',
                'forceBlock' => '-1'
            ),
            array(
                'title' => t('Text Light'),
                'menuClass' => '',
                'spanClass' => 'text-light',
                'forceBlock' => '-1'
            ),
            array(
                'title' => t('P1'),
                'menuClass' => '',
                'spanClass' => 'p1',
                'forceBlock' => '-1'
            ),
            array(
                'title' => t('H1'),
                'menuClass' => '',
                'spanClass' => 'h1',
                'forceBlock' => '-1'
            ),
            array(
                'title' => t('H2'),
                'menuClass' => '',
                'spanClass' => 'h2',
                'forceBlock' => '-1'
            ),
            array(
                'title' => t('H3'),
                'menuClass' => '',
                'spanClass' => 'h3',
                'forceBlock' => '-1'
            ),
            array(
                'title' => t('H4'),
                'menuClass' => '',
                'spanClass' => 'h4',
                'forceBlock' => '-1'
            )
        );
    }

    public function getThemeAreaLayoutPresets() {
        $presets = array(
            array(
                'handle' => 'col12',
                'name' => 'Inhalt: 12',
                'container' => '<div class="row"></div>',
                'columns' => array(
                    '<div class="col-12"></div>'
                )
            ),
            array(
                'handle' => 'col66',
                'name' => 'Inhalt: 6 / 6',
                'container' => '<div class="row"></div>',
                'columns' => array(
                    '<div class="col-12 col-lg-6"></div>',
                    '<div class="col-12 col-lg-6"></div>'
                )
            ),
            array(
                'handle' => 'col444',
                'name' => 'Inhalt: 4 / 4 / 4',
                'container' => '<div class="row"></div>',
                'columns' => array(
                    '<div class="col-12 col-lg-4"></div>',
                    '<div class="col-12 col-lg-4"></div>',
                    '<div class="col-12 col-lg-4"></div>',
                )
            ),
            array(
                'handle' => 'col48',
                'name' => 'Inhalt: 4 / 8',
                'container' => '<div class="row"></div>',
                'columns' => array(
                    '<div class="col-12 col-lg-4"></div>',
                    '<div class="col-12 col-lg-8"></div>'
                )
            ),
            array(
                'handle' => 'col84',
                'name' => 'Inhalt: 8 / 4',
                'container' => '<div class="row"></div>',
                'columns' => array(
                    '<div class="col-12 col-lg-8"></div>',
                    '<div class="col-12 col-lg-4"></div>'
                )
            )
        );
        return $presets;
    }
}
