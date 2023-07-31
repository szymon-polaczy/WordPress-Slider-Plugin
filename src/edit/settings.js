import {
  SelectControl,
  TextControl,
  ToggleControl,
} from '@wordpress/components';

import {
  ColorPalette,
  InspectorControls,
} from '@wordpress/block-editor';

export default ({settings, setAttributes}) => {
    const updateSetting = (new_value, setting) => {
            settings[setting] = new_value;
            setAttributes({settings: {...settings}});
    }

    return <InspectorControls key="setting">
              <TextControl
                label="Slides per page"
                value={ settings.perPage }
                onChange={ (new_value) => updateSetting(new_value, 'perPage') }
              />

              <TextControl
                label="Slides per move"
                value={ settings.perMove }
                onChange={ (new_value) => updateSetting(new_value, 'perMove') }
              />

              <ToggleControl
                label="Enable arrows"
                checked={ settings.arrows }
                onChange={ (new_value) => updateSetting(new_value, 'arrows') }
              />

              <ToggleControl
                label="Enable pagination (indicator dots)"
                checked={ settings.pagination }
                onChange={ (new_value) => updateSetting(new_value, 'pagination') }
              />

              <ToggleControl
                label="Enable pause on hover"
                checked={ settings.pauseOnHover }
                onChange={ (new_value) => updateSetting(new_value, 'pauseOnHover') }
              />

              <ToggleControl
                label="Enable pause on focus"
                checked={ settings.pauseOnFocus }
                onChange={ (new_value) => updateSetting(new_value, 'pauseOnFocus') }
              />

              <ToggleControl
                label="Enable dragging"
                checked={ settings.drag }
                onChange={ (new_value) => updateSetting(new_value, 'drag') }
              />

              <ToggleControl
                label="Enable autoplay"
                checked={ settings.autoplay }
                onChange={ (new_value) => updateSetting(new_value, 'autoplay') }
              />

              <TextControl
                label="Autoplay interval - Number of miliseconds between autoplay intervals"
                checked={ settings.interval }
                onChange={ (new_value) => updateSetting(new_value, 'interval') }
              />

              <TextControl
                label="Gap between slides (The CSS format is acceptable)"
                checked={ settings.gap }
                onChange={ (new_value) => updateSetting(new_value, 'gap') }
              />

              <TextControl
                label="Easing function"
                help="The CSS format is acceptable (linear, ease or cubic-bezier())"
                checked={ settings.easing }
                onChange={ (new_value) => updateSetting(new_value, 'easing') }
              />

              <TextControl
                label="Transition speed"
                help="The transition speed in miliseconds (0 to insantly jump to the next)"
                checked={ settings.speed }
                onChange={ (new_value) => updateSetting(new_value, 'speed') }
              />

              <ToggleControl
                label="Enable rewind to first slide (doesn't work in loop mode)"
                checked={ settings.rewind }
                onChange={ (new_value) => updateSetting(new_value, 'rewind') }
              />

              <ToggleControl
                label="Enable rewind by drag to first slide (rewind option has to be enabled)"
                checked={ settings.rewindByDrag }
                onChange={ (new_value) => updateSetting(new_value, 'rewindByDrag') }
              />

              <TextControl
                label="Rewind speed"
                help="The rewind speed in miliseconds (Transition speed is used as default)"
                checked={ settings.rewindSpeed }
                onChange={ (new_value) => updateSetting(new_value, 'rewindSpeed') }
              />

              <TextControl
                label="Start slide"
                help="Define start index"
                checked={ settings.start }
                onChange={ (new_value) => updateSetting(new_value, 'start') }
              />

              <SelectControl
                label="Slider direction"
                options={[
                  { value: 'ltr', label: 'Left to right' },
                  { value: 'rtl', label: 'Right to left' },
                  { value: 'ttb', label: 'Top to bottom' },
                ]}
                value={ settings.direction }
                onChange={ (new_value) => updateSetting(new_value, 'direction') }
              />

              <SelectControl
                label="Pagination direction"
                options={[
                  { value: 'ltr', label: 'Left to right' },
                  { value: 'rtl', label: 'Right to left' },
                  { value: 'ttb', label: 'Top to bottom' },
                ]}
                value={ settings.paginationDirection }
                onChange={ (new_value) => updateSetting(new_value, 'paginationDirection') }
              />

              <SelectControl
                label="Slider type"
                options={[
                  { value: 'slide', label: 'Slide' },
                  { value: 'loop', label: 'Loop' },
                ]}
                value={ settings.type }
                onChange={ (new_value) => updateSetting(new_value, 'type') }
              />
    </InspectorControls>
}
